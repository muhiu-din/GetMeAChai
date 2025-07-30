"use client"
import React from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"
const Navbar = () => {
  const { data: session } = useSession()
  //  if(session) {
  //   return <>
  //     Signed in as {session.user.email} <br/>
  //     <button onClick={() => signOut()}>Sign out</button>
  //   </>
  // }
  return (
    
    <nav className='px-6 flex flex-row justify-between items-center bg-gray-900 text-white h-16'>
       <Link href={"/"}>
       <div className='flex flex-row items-center justify-center'>
         <span className='text-lg font-bold'>
            GetMeAChai!
        </span>
        <span><img className='w-10 invert' src="tea.gif" alt="chai" /></span>
       </div></Link>
        {/* <ul className='flex flex-row justify-between items-center gap-4'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Signup</li>
        <li>Login</li>
        </ul> */}
      <div>
         {!session && <Link href="/Login"><button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          Login
        </button></Link>}
        {session && <Link href="/Dashboard"><button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          Dashboard
        </button></Link>}
        {session && <button onClick={() => signOut()} className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          Logout
        </button>}
      </div>
    </nav>
  ) 
}

export default Navbar