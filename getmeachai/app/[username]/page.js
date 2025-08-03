import React from "react";
import PaymentPage from "../../components/PaymentPage.js";
import { handlePaymentSuccess } from "@/app/actions/useractions";

export default async function UsernamePage({ params, searchParams }) {
  // ✅ Run on server when user comes back from Stripe
  if (searchParams.success && searchParams.session_id) {
    await handlePaymentSuccess(searchParams.session_id);
  }

  return (
    <>
      <PaymentPage username={params.username} />
    </>
  );
}
