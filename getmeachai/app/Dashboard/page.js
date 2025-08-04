"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { data: session } = useSession();
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [coverPicture, setCoverPicture] = useState("");
  const [stripeID, setStripeID] = useState("");
  const [stripeSecret, setStripeSecret] = useState("");
  const [displayBox, setDisplayBox] = useState([]);

  // Redirect if not logged in
  useEffect(() => {
    if (!session) {
      router.push("/Login");
    } else {
      setUsername(session.user.name || "");
      setEmail(session.user.email || "");
    }
  }, [session]);

  // Fetch payments
  const fetchData = async (uname) => {
    try {
      if (!uname) return;
      console.log("Fetching payments for:", uname);

      const res = await fetch(`/api/paymentDb?username=${uname}`);
      const result = await res.json();
      console.log("Payments fetched:", result);

      setDisplayBox(result);
      if (!res.ok) alert(result.message || "Error fetching payments");
    } catch (error) {
      console.error("Fetch failed:", error);
      alert(error.message);
    }
  };

  // Fetch after session is ready
  useEffect(() => {
    if (session?.user?.name) {
      fetchData(session.user.name);
    }
  }, [session]);

  // Save profile
  const handleSave = async (e) => {
    e.preventDefault();
    console.log("Saving profile:", {
      name,
      email,
      username,
      profilePicture,
      coverPicture,
      stripeID,
      stripeSecret,
    });

    const userData = {
      name,
      email,
      username,
      profilePicture,
      coverPicture,
      stripeID,
      stripeSecret,
    };

    const res = await fetch(`/api/paymentDb?username=${username}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    if (res.ok) {
      alert("Profile updated successfully!");
      fetchData(username); // refresh payments
    } else {
      alert("Failed to update profile.");
    }
  };

  return (
    <div className="min-h-screen">
      <h1 className="text-3xl font-bold text-center py-4">
        Welcome to Your Dashboard
      </h1>

      {/* Profile Form */}
      <form onSubmit={handleSave} className="flex flex-col items-center">
        <div className="flex w-1/2 my-1 flex-col gap-1">
          <label className="font-semibold">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="py-1 px-2 bg-slate-600 rounded-lg"
          />
        </div>

        <div className="flex w-1/2 my-1 flex-col gap-1">
          <label className="font-semibold">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="py-1 px-2 bg-slate-600 rounded-lg"
          />
        </div>

        <div className="flex w-1/2 my-1 flex-col gap-1">
          <label className="font-semibold">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="py-1 px-2 bg-slate-600 rounded-lg"
          />
        </div>

        <div className="flex w-1/2 my-1 flex-col gap-1">
          <label className="font-semibold">Profile Picture</label>
          <input
            type="text"
            value={profilePicture}
            onChange={(e) => setProfilePicture(e.target.value)}
            className="py-1 px-2 bg-slate-600 rounded-lg"
          />
        </div>

        <div className="flex w-1/2 my-1 flex-col gap-1">
          <label className="font-semibold">Cover Picture</label>
          <input
            type="text"
            value={coverPicture}
            onChange={(e) => setCoverPicture(e.target.value)}
            className="py-1 px-2 bg-slate-600 rounded-lg"
          />
        </div>

        <div className="flex w-1/2 my-1 flex-col gap-1">
          <label className="font-semibold">Stripe ID</label>
          <input
            type="text"
            value={stripeID}
            onChange={(e) => setStripeID(e.target.value)}
            className="py-1 px-2 bg-slate-600 rounded-lg"
          />
        </div>

        <div className="flex w-1/2 my-1 flex-col gap-1">
          <label className="font-semibold">Stripe Secret</label>
          <input
            type="text"
            value={stripeSecret}
            onChange={(e) => setStripeSecret(e.target.value)}
            className="py-1 px-2 bg-slate-600 rounded-lg"
          />
        </div>

        <button
          type="submit"
          className="w-1/2 text-white bg-gradient-to-br from-purple-600 to-blue-500 
          hover:bg-gradient-to-bl focus:ring-4 focus:outline-none 
          focus:ring-blue-300 dark:focus:ring-blue-800 font-medium 
          rounded-lg text-sm py-2 my-6 text-center"
        >
          Save
        </button>
      </form>

      
    </div>
  );
}
