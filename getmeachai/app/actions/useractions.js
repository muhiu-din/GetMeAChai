"use server";

import Stripe from "stripe";
import User from "../models/User";
import Payment from "../models/Payment";

// Create checkout session using user's secret
export async function createCheckoutSession({ userId, amount, name, message, to_user }) {
  const user = await User.findById(userId);
  if (!user) throw new Error("User not found");
  if (!user.stripeSecret) throw new Error("User does not have a Stripe account");

  const userStripe = new Stripe(user.stripeSecret);

  const session = await userStripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: { name: `Donation to ${to_user}` },
          unit_amount: Math.round(Number(amount) * 100),
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${process.env.NEXTAUTH_URL}/${user.username}?success=true&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXTAUTH_URL}/${user.username}?canceled=true`,
    metadata: {
      userId: String(userId || ""),
      username: String(name || "Unknown"),
      message: String(message || ""),
      to_user: String(to_user || "admin"),
      stripeSecret: user.stripeSecret, // ✅ store here
    },
  });

  return session;
}

export async function handlePaymentSuccess(sessionId) {
  console.log("Handle payment running...");

  // 1️⃣ Retrieve session with platform key first
  const tempStripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const session = await tempStripe.checkout.sessions.retrieve(sessionId);
  if (!session) throw new Error("Session not found");

  // 2️⃣ Check if payment already exists
  const existing = await Payment.findOne({ oid: session.id });
  if (existing) {
    console.log("⚠ Payment already recorded:", session.id);
    return existing; // ✅ Prevent duplicate save
  }

  // 3️⃣ Retrieve the user's Stripe secret
  const userSecret = session.metadata.stripeSecret;
  if (!userSecret) throw new Error("No user secret in session");

  const userStripe = new Stripe(userSecret);
  const verifiedSession = await userStripe.checkout.sessions.retrieve(sessionId);

  const metadata = verifiedSession.metadata || {};

  // 4️⃣ Save only if not already saved
  const payment = await Payment.create({
    name: metadata.username || "Unknown",
    to_user: metadata.to_user || "admin",
    oid: session.id,
    message: metadata.message || "Payment for subscription",
    amount: (session.amount_total || 0) / 100,
    done: session.payment_status === "paid",
  });

  console.log("✅ Payment saved to MongoDB:", payment);

  return payment;
}

