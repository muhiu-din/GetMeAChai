"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
const Dashboard = () => {
   const { data: session } = useSession()
     if(!session){
      const router = useRouter()
      router.push("/Login")
     }
  return (
    <div className='min-h-screen'>
      <h1 className="text-3xl font-bold text-center py-4">Welcome to Your Dashboard</h1>
      {/* Forms */}
      <div className='flex flex-col items-center'>
        <div className='flex w-1/2 my-1 flex-col gap-1'>
          <label className='font-semibold ' htmlFor="name">Name</label>
          <input type="text" className='py-1 bg-slate-600 rounded-lg' />
        </div>
        <div className='flex w-1/2 my-1 flex-col gap-1'>
          <label className='font-semibold ' htmlFor="email">Email</label>
          <input type="email" className='py-1 bg-slate-600 rounded-lg' />
        </div>
        <div className='flex w-1/2 my-1 flex-col gap-1'>
          <label className='font-semibold ' htmlFor="username">Username</label>
          <input type="text" className='py-1 bg-slate-600 rounded-lg' />
        </div>
        <div className='flex w-1/2 my-1 flex-col gap-1'>
          <label className='font-semibold ' htmlFor="profilePicture">Profile Picture</label>
          <input type="text" className='py-1 bg-slate-600 rounded-lg' />
        </div>
        <div className='flex w-1/2 my-1 flex-col gap-1'>
          <label className='font-semibold ' htmlFor="Cover Picture">Cover Picture</label>
          <input type="text" className='py-1 bg-slate-600 rounded-lg' />
        </div>
        <div className='flex w-1/2 my-1 flex-col gap-1'>
          <label className='font-semibold ' htmlFor="razorpayCredentials">Stripe ID</label>
          <input type="text" className='py-1 bg-slate-600 rounded-lg' />
        </div>
        <div className='flex w-1/2 my-1 flex-col gap-1'>
          <label className='font-semibold ' htmlFor="razorpayCredentials">Stripe Secret</label>
          <input type="text" className='py-1 bg-slate-600 rounded-lg' />
        </div>
        <button className=' w-1/2 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm  py-2 my-6 text-center '>Save</button>
   </div>
    </div>
  )
}

export default Dashboard