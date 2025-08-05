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
  const [userData, setuserData] = useState({}); // ✅ object, not array

  // Redirect if not logged in
  useEffect(() => {
    if (!session) {
      router.push("/Login");
    } else {
      setUsername(session.user.name || "");
      setEmail(session.user.email || "");
    }
  }, [session]);

  // Fetch user data
  const fetchData = async (uname) => {
    try {
      if (!uname) return;
      const res = await fetch(`/api/userDb?username=${uname}`);
      const result = await res.json();
      console.log("User fetched:", result);

      if (!res.ok) throw new Error(result.message || "Error fetching user");

      // ✅ Your backend returns user object directly
      setuserData(result);

      // Pre-fill inputs with fetched data
      setName(result.name || "");
      setEmail(result.email || "");
      setUsername(result.username || "");
      setProfilePicture(result.profilePicture || "");
      setCoverPicture(result.coverPicture || "");
      setStripeID(result.stripeID || "");
      setStripeSecret(result.stripeSecret || "");
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

    const updatedData = {
    name: name || userData.name,
    email: email || userData.email,
    username: username || userData.username,
    profilePicture: profilePicture || userData.profilePicture,
    coverPicture: coverPicture || userData.coverPicture,
    stripeID: stripeID || userData.stripeID,
    stripeSecret: stripeSecret || userData.stripeSecret,
  };

    const res = await fetch(`/api/userDb?username=${username}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });

    if (res.ok) {
      alert("Profile updated successfully!");
      fetchData(username); // refresh
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
        {[
          ["Name", name, setName],
          ["Email", email, setEmail],
          ["Username", username, setUsername],
          ["Profile Picture", profilePicture, setProfilePicture],
          ["Cover Picture", coverPicture, setCoverPicture],
          ["Stripe ID", stripeID, setStripeID],
          ["Stripe Secret", stripeSecret, setStripeSecret],
        ].map(([label, value, setter]) => (
          <div key={label} className="flex w-1/2 my-1 flex-col gap-1">
            <label className="font-semibold">{label}</label>
            <input
              type="text"
              value={value || ""}
              onChange={(e) => setter(e.target.value)}
              className="py-1 px-2 bg-slate-600 rounded-lg"
            />
          </div>
        ))}

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
