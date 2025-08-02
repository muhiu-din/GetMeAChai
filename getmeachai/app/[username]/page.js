import React from 'react'
import PaymentPage from '../../components/PaymentPage.js'
const username = ({params}) => {
  return (
    // <div className='min-h-screen'>
    //   <div className='cover w-full relative '>
    //   <img className='w-full h-full object-cover' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/5176467/0c71e6610cf24d8497bf7e8b7452be1e/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/4.png?token-hash=KTYr3SIB9-HNHHceGmc2gyhGX5coNhmGeV5FO8G_7Vo%3D&amp;token-time=1754265600" alt="" elementtiming="Creator Public Page : Base Page" data-is-key-element="true"></img>
    //   <img className='absolute w-30 h-30 top-60 right-143 border-2 border-white rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhUD52r4_R4X0BW4GzaVcdOknXQhVp9-HQDQ&s" alt="" />
    //   </div>
    //   <div className='flex flex-col items-center justify-center mt-12 mb-4 gap-2'>
    //     {/* //username */}
    //     <div className='font-bold text-lg'>
    //       @{params.username}
    //     </div>
    //     {/* Description */}
    //     <div  className='text-slate-200'>
    //       Creating Pure, a weather and graphics mod for Assetto Corsa/CSP
    //     </div>
    //     {/* Statics */}
    //     <div className='text-slate-400 '>
    //       <ul className='list-disc flex flex-row justify-center gap-6'>
    //         <li> 317,541 members</li>
    //         <li> 76 posts</li>
    //         <li> $54,610/month</li>
    //       </ul>
        
    //     </div>
    //   </div>
    //   <div className='flex flex-row w-[80%]  mx-auto gap-2 '>
    //     {/* Supporters */}
    //     <div className='bg-slate-900 rounded-lg p-6 my-10 w-1/2 h-auto'>
    //       <h1 className='text-2xl font-bold'>Supporters</h1>
    //       <ul className='mx-4'>
    //         <div className='flex flex-row my-3 gap-2 items-center'>
    //           <img className='w-9' src="avatar.gif" alt="" />
    //           <li >Ahmad donated <span className='font-bold'>4$</span> with a message: "Lots of love❤️"</li>
    //         </div>
    //         <div className='flex flex-row my-3 gap-2 items-center'>
    //           <img className='w-9' src="avatar.gif" alt="" />
    //           <li >Ahmad donated <span className='font-bold'>4$</span> with a message: "Lots of love❤️"</li>
    //         </div>
    //         <div className='flex flex-row my-3 gap-2 items-center'>
    //           <img className='w-9' src="avatar.gif" alt="" />
    //           <li >Ahmad donated <span className='font-bold'>4$</span> with a message: "Lots of love❤️"</li>
    //         </div>
    //         <div className='flex flex-row my-3 gap-2 items-center'>
    //           <img className='w-9' src="avatar.gif" alt="" />
    //           <li >Ahmad donated <span className='font-bold'>4$</span> with a message: "Lots of love❤️"</li>
    //         </div>
            

    //       </ul>
    //     </div>
    //       {/* Make a payment */}
    //     <div className='bg-slate-900 rounded-lg p-6 my-10 w-1/2 flex flex-col justify-center h-auto'>
    //       <h1 className='text-2xl font-bold'>Make a payment</h1>
    //        <div className='flex flex-col gap-2 justify-center items-center my-4'>
    //          <input className='p-2 w-full rounded-lg bg-slate-800 text-white' type="text" placeholder='Enter Name' />
    //          <input className='p-2 w-full rounded-lg bg-slate-800 text-white' type="text" placeholder='Enter Message' />
    //          <input className='p-2 w-full rounded-lg bg-slate-800 text-white' type="text" placeholder='Enter Amount' />
    //         <button className=' w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center '>Donate</button>
    //        </div>
    //        {/* Or choose an amount */}
    //        <div className='flex flex-row gap-2 items-center my-4'>
    //          <button className='bg-slate-700 hover:bg-slate-500 px-2 py-1 rounded-lg'>Pay 5$</button>
    //          <button className='bg-slate-700 hover:bg-slate-500 px-2 py-1 rounded-lg'>Pay 10$</button>
    //          <button className='bg-slate-700 hover:bg-slate-500 px-2 py-1 rounded-lg'>Pay 20$</button>
    //        </div>
    //     </div>
    //   </div>
    // </div>
    <>
    <PaymentPage username={params.username}/>
    </>
  )
}

export default username