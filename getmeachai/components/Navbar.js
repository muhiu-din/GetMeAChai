import React from 'react'

const Navbar = () => {
  return (
    <nav className='px-6 flex flex-row justify-between items-center bg-gray-900 text-white h-16'>
       <div className='flex flex-row items-center justify-center'>
         <span className='text-lg font-bold'>
            GetMeAChai!
        </span>
        <span><img className='w-10 invert' src="tea.gif" alt="chai" /></span>
       </div>
        <ul className='flex flex-row justify-between items-center gap-4'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Signup</li>
        <li>Login</li>
        </ul>
    </nav>
  )
}

export default Navbar