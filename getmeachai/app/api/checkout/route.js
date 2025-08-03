import { NextResponse } from "next/server";
import { createCheckoutSession } from "@/app/actions/useractions";

export async function POST(req) {
  try {
    const { userId } = await req.json();
    const session = await createCheckoutSession(userId);

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
  }
}
