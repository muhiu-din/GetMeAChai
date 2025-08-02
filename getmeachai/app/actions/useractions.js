"use server";

import Stripe from "stripe";
import User from "../models/User";
import Payment from "../models/Payment";
import connectDB from "../db/connectDB";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// ✅ Create Stripe Checkout Session
export async function createCheckoutSession(userId) {
  await connectDB();

  const user = await User.findById(userId);
  if (!user) {
    throw new Error("User not found");
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: { name: "Premium Subscription" },
          unit_amount: 1000, // $10 in cents
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${process.env.NEXTAUTH_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXTAUTH_URL}/cancel`,
    metadata: {
      userId: user._id.toString(),
      username: user.username,
    },
  });

  return session;
}

// ✅ Handle Payment After Success
export async function handlePaymentSuccess(sessionId) {
  await connectDB();

  const session = await stripe.checkout.sessions.retrieve(sessionId);
  if (!session) throw new Error("Session not found");

  const metadata = session.metadata || {};

  // ✅ Create Payment according to your exact model
  const payment = await Payment.create({
    name: metadata.username || "Unknown",
    to_user: metadata.to_user || "admin", // Or whoever receives the payment
    oid: session.id,  // Using Stripe session ID
    message: metadata.message || "Payment for subscription",
    amount: (session.amount_total || 0) / 100, // convert cents to USD
    done: session.payment_status === "paid",
  });

  return payment;
}
