import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear(); // Get the current year
  return (
    <footer className='px-6 flex items-center justify-center bg-gray-900 text-white h-16'>
        <p className='text-center'>Copyright &copy; {year} | Get me a chai - All rights reserved</p>
    </footer>
  )
}

export default Footer