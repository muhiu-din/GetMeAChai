"use client";
import React, { useState ,useEffect } from "react";
import { useSession } from "next-auth/react";




export default function PaymentPage({ username }) {
  const { data: session } = useSession(); // get logged-in user
  const [form, setForm] = useState({ name: "", message: "", amount: "" });
  const [loading, setLoading] = useState(false);
  const [displayBox,setdisplayBox] = useState([]);
  const [userData, setUserData] = useState({}); // to store user data
 
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

      console.log("Creating checkout session with amount:", amount);
      const res = await fetch("/api/checkout", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
 body: JSON.stringify({
  userId: session.user._id,
  amount: Number(amount),
  name: form.name,
  message: form.message,
  to_user: username,
}),

      });
       console.log("Creating checkout session with amount2:", amount);

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
  const fetchData = async () => {
    try{
      console.log('Fetching data from paymentDb');
      let res = await fetch(`/api/paymentDb?username=${username}`);
      let result = await res.json()
      console.log('Data fetched from paymentDb:', result);
      setdisplayBox(result)
      if(!res.ok){
        console.log('Failed fetching data tery box error not ok');
        
        alert(result.message)
      }
    }catch(error){
      alert(error.message)
      console.log("catch box running while fetching data")
    }
  }
  const fetchUserData = async () => {
    try{
      console.log('Fetching data from userDb');
      let res = await fetch(`/api/userDb?username=${username}`);
      let result = await res.json()
      console.log('Data fetched from userDb:', result);
      setUserData(result)
      if(!res.ok){
        console.log('Failed fetching data tery box error not ok');
        
        alert(result.message)
      }
    }catch(error){
      alert(error.message)
      console.log("catch box running while fetching data")
    }
  }

  useEffect(() => {
   console.log('Use Effect runnning');
   fetchData();
   fetchUserData();
  }, [])
  

  return (

    <div className="min-h-screen">
      <div className="cover w-full relative">
        <img
          className="w-full h-full object-cover"
          src={userData.coverPicture || "https://via.placeholder.com/1500x500"}
          alt="Cover"
        />
        <img
          className="absolute w-20 h-20 md:w-30 md:h-30 md:top-[76%] top-[65%] right-[40%] md:right-[45%] border-2 border-white rounded-lg"
          src={userData.profilePicture || "https://via.placeholder.com/150"}
          alt="Profile"
        />
      </div>

      {/* Profile Info */}
      <div className="flex md:px-0 px-6  flex-col items-center justify-center mt-12 mb-4 gap-2">
        <div className="font-bold text-lg">@{username}</div>
        <div className="text-slate-200">
         {userData.name} is collecting donations...Lets support him!
        </div>
        <div className="text-slate-400">
          <ul className="list-disc flex flex-row justify-center gap-6">
            <li>{displayBox.length} payments</li>
            <li>${displayBox.reduce((acc, item) => acc + item.amount, 0)} raised</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-row w-[80%] mx-auto gap-2">
        {/* Supporters */}
        <div className="bg-slate-900 rounded-lg p-6 my-10 w-1/2 h-auto">
          <h1 className="text-2xl font-bold">Supporters</h1>
          <ul className="mx-4">
           
               {displayBox.length === 0 ? ( "No Donations yet🥲") :  (displayBox.map((item,index) => (
                <div
                  key={index}
                  className="flex flex-row my-3 gap-2 items-center"
                >
                  <img className="w-9" src="avatar.gif" alt="" />
                  <li>
                    {item.name} donated <span className="font-bold">{item.amount}$</span> with a
                    message: "{item.message}"
                  </li>
                </div>
               ))) }
             
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
