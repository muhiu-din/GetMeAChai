"use client"
import React,{useState} from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"
const Navbar = () => {
  const { data: session } = useSession()
  const [showdropdown,setshowdropdown] = useState(false)
  //  if(session) {
  //   return <>
  //     Signed in as {session.user.email} <br/>
  //     <button onClick={() => signOut()}>Sign out</button>
  //   </>
  // }
  return (
    
    <nav className='px-6 flex flex-col md:flex-row justify-between items-center bg-gray-900 text-white h-auto md:h-16'>
       <Link href={"/"}>
       <div className='flex flex-row items-center justify-center'>
         <span className='text-lg font-bold'>
            GetMeAChai!
        </span>
        <span><img className='w-10 invert' src="tea.gif" alt="chai" /></span>
       </div></Link>
      <div className='relative flex flex-row'>
         {!session && <Link href="/Login"><button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          Login
        </button></Link>}
        {session && <>
<button onClick={() => setshowdropdown(!showdropdown)} onBlur={() => setTimeout(() => {
  setshowdropdown(false)
},300)} id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="text-white inline-flex items-center bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" type="button">Welcome {session.user.email} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>
</button>


<div id="dropdownHover" className={`z-10 ${showdropdown ?"" : "hidden"} absolute left-[125px] bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700`}>
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
      <li>
        <Link href="/Dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
      </li>
      <li>
        <Link href={`${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
      </li>
      
    </ul>
</div>
</>}
      
        {session && <button onClick={() => signOut()} className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          Logout
        </button>}
      </div>
    </nav>
  ) 
}

export default Navbar