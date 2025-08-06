
import React from "react";
import PaymentPage from "../../components/PaymentPage.js";
import { handlePaymentSuccess } from "@/app/actions/useractions";
import {notFound} from "next/navigation";
import connectDB from "../db/connectDB.js";
import User from "@/app/models/User.js";                
export default async function UsernamePage({ params, searchParams }) {
  // ✅ Run on server when user comes back from Stripe
  if (searchParams.success && searchParams.session_id) {
    await handlePaymentSuccess(searchParams.session_id);
  }
  const checkUser = async () => {
    await connectDB();
    const user = await User.findOne({ username: params.username });
    if (!user) {
     return notFound(); // Redirect to 404 if user not found
    }
    
  };
  await checkUser();

  return (
      <>
      <PaymentPage username={params.username} />
      </>
  );
}
