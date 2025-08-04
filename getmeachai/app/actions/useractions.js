"use server";

import Stripe from "stripe";
import User from "../models/User";
import Payment from "../models/Payment";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function createCheckoutSession({ userId, amount, name, message, to_user }) {
  const user = await User.findById(userId);
  try {
    return await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name: `Donation to ${to_user}` },
            unit_amount: Math.round(Number(amount) * 100), // ✅ must be integer
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
      },
    });
  } catch (err) {
    console.error("❌ Stripe create session failed:", err);
    throw err;
  }
}


export async function handlePaymentSuccess(sessionId) {
  // await connectDB();
  console.log('Handle payment runninbg');
  

  const session = await stripe.checkout.sessions.retrieve(sessionId);
  if (!session) throw new Error("Session not found");

  const metadata = session.metadata || {};

  // ✅ Save directly to MongoDB
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
