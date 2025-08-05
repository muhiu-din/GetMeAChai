"use server";

import Stripe from "stripe";
import User from "../models/User";
import Payment from "../models/Payment";

// ✅ Platform-level Stripe for handling webhook/session retrieval
const platformStripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Create checkout session using user's secret
export async function createCheckoutSession({ userId, amount, name, message, to_user }) {
  const user = await User.findById(userId);
  if (!user) throw new Error("User not found");
  if (!user.stripeSecret) throw new Error("User does not have a Stripe account");

  // ✅ Per-user Stripe instance
  const userStripe = new Stripe(user.stripeSecret);

  try {
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
      },
    });

    return session;
  } catch (err) {
    console.error("❌ Stripe create session failed:", err);
    throw err;
  }
}

// ✅ Use platform key for retrieval, stable between requests
export async function handlePaymentSuccess(sessionId) {
  console.log("Handle payment running...");

  // retrieve session using your platform key
  const session = await platformStripe.checkout.sessions.retrieve(sessionId);
  if (!session) throw new Error("Session not found");

  const metadata = session.metadata || {};

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
