"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";

export default function PaymentPage({ username }) {
  const { data: session } = useSession(); // get logged-in user
  const [form, setForm] = useState({ name: "", message: "", amount: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleQuickPay = (amount) => {
    setForm({ ...form, amount });
    handleCheckout(amount);
  };

  const handleCheckout = async (customAmount) => {
    const amount = customAmount || form.amount;
    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      alert("Enter a valid amount!");
      return;
    }

    if (!session) {
      alert("Please sign in to donate!");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/checkout", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
 body: JSON.stringify({
  userId: session.user._id, // ✅ automatically from logged-in user
  amount: Number(amount),
  name: form.name,
  message: form.message,
  to_user: username, // the profile user receiving payment
}),

      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url; // Redirect to Stripe Checkout
      } else {
        alert("Error creating checkout session");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="cover w-full relative">
        <img
          className="w-full h-full object-cover"
          src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/5176467/0c71e6610cf24d8497bf7e8b7452be1e/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/4.png?token-hash=S22sZbbw8Dt85kJj03PinxVUQfu66QkWoqjR6oY7Ky4%3D&token-time=1756944000"
          alt="Cover"
        />
        <img
          className="absolute w-30 h-30 top-60 right-143 border-2 border-white rounded-lg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhUD52r4_R4X0BW4GzaVcdOknXQhVp9-HQDQ&s"
          alt="Profile"
        />
      </div>

      {/* Profile Info */}
      <div className="flex flex-col items-center justify-center mt-12 mb-4 gap-2">
        <div className="font-bold text-lg">@{username}</div>
        <div className="text-slate-200">
          Creating Pure, a weather and graphics mod for Assetto Corsa/CSP
        </div>
        <div className="text-slate-400">
          <ul className="list-disc flex flex-row justify-center gap-6">
            <li>317,541 members</li>
            <li>76 posts</li>
            <li>$54,610/month</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-row w-[80%] mx-auto gap-2">
        {/* Supporters */}
        <div className="bg-slate-900 rounded-lg p-6 my-10 w-1/2 h-auto">
          <h1 className="text-2xl font-bold">Supporters</h1>
          <ul className="mx-4">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="flex flex-row my-3 gap-2 items-center"
                >
                  <img className="w-9" src="avatar.gif" alt="" />
                  <li>
                    Ahmad donated <span className="font-bold">$4</span> with a
                    message: "Lots of love❤️"
                  </li>
                </div>
              ))}
          </ul>
        </div>

        {/* Make a payment */}
        <div className="bg-slate-900 rounded-lg p-6 my-10 w-1/2 flex flex-col justify-center h-auto">
          <h1 className="text-2xl font-bold">Make a payment</h1>

          <div className="flex flex-col gap-2 justify-center items-center my-4 w-full">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="p-2 w-full rounded-lg bg-slate-800 text-white"
              type="text"
              placeholder="Enter Name"
            />
            <input
              name="message"
              value={form.message}
              onChange={handleChange}
              className="p-2 w-full rounded-lg bg-slate-800 text-white"
              type="text"
              placeholder="Enter Message"
            />
            <input
              name="amount"
              value={form.amount}
              onChange={handleChange}
              className="p-2 w-full rounded-lg bg-slate-800 text-white"
              type="number"
              placeholder="Enter Amount"
            />

            <button
              onClick={() => handleCheckout()}
              disabled={loading}
              className="w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              {loading ? "Redirecting..." : "Donate"}
            </button>
          </div>

          {/* Quick Pay Buttons */}
          <div className="flex flex-row gap-2 items-center my-4">
            {[5, 10, 20].map((amt) => (
              <button
                key={amt}
                onClick={() => handleQuickPay(amt)}
                className="bg-slate-700 hover:bg-slate-500 px-2 py-1 rounded-lg text-white"
              >
                Pay ${amt}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
