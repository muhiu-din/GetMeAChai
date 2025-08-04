import { NextResponse } from "next/server";
import { createCheckoutSession } from "@/app/actions/useractions";

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("Incoming body:", body);

    const { userId, amount, name, message, to_user } = body;

    const session = await createCheckoutSession({
      userId,
      amount,
      name,
      message,
      to_user,
    });

    console.log("✅ Session created:", session.id); // Only log ID

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("❌ Stripe checkout error:", error.stack || error);
    return NextResponse.json({ error: error.message || "Unknown error" }, { status: 500 });
  }
}

