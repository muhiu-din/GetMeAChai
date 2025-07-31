"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
const Login = () => {
   const { data: session } = useSession()
   if(session){
    const router = useRouter()
    router.push("/Dashboard")
   }
  return (
    <div className='text-white r'>
     
      <div className="flex flex-col items-center gap-2 min-h-screen p-10">
       <h1 className='font-bold text-2xl container mx-auto text-center pb-4'>Login and start raising fund</h1>
  {/* Google */}
  <button
    className="flex items-center w-59 bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
    <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 0 48 48">
      <g fill="none">
        <path fill="#FBBC05" d="M9.8,24c0-1.5,0.3-2.9,0.7-4.4L2.6,13.6C1.1,16.7,0.2,20.3,0.2,24s0.9,7.3,2.4,10.4l7.9-6.1C10.1,26.9,9.8,25.5,9.8,24Z" />
        <path fill="#EB4335" d="M23.7,10.1c3.3,0,6.3,1.2,8.7,3.1L39.2,6.4C35,2.8,29.7,0.5,23.7,0.5C14.4,0.5,6.4,5.8,2.6,13.6l7.9,6.1C12.4,14.1,17.5,10.1,23.7,10.1Z" />
        <path fill="#34A853" d="M23.7,37.9c-6.2,0-11.4-4-13.2-9.5l-7.9,6.1c3.8,7.8,11.9,13.1,21.1,13.1c5.7,0,11.2-2.1,15.3-6.4l-7.5-5.8C29.4,37.1,26.7,37.9,23.7,37.9Z" />
        <path fill="#4285F4" d="M46.1,24c0-1.4-0.2-2.9-0.5-4.3H23.7v9.1h12.6c-0.6,2.9-2.3,5.2-4.8,6.9l7.5,5.8C43.3,37.6,46.1,31.6,46.1,24Z" />
      </g>
    </svg>
    <span>Continue with Google</span>
  </button>

  {/* LinkedIn */}
  <button
    className="flex items-center w-59 bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
    <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 44 44">
      <path fill="#007EBB" d="M707.2,274.4c-3.2,0-5.2-2.1-5.2-4.7s2.1-4.7,5.2-4.7c3.1,0,5.2,2.1,5.2,4.7S710.4,274.4,707.2,274.4z M703.1,277.8H711.7V305H703.1V277.8z M746,305h-9.7v-14c0-3.7-1.5-6.2-5.1-6.2c-2.5,0-4,1.7-4.7,3.3c-0.2,0.5-0.3,1.3-0.3,2v14.9h-9.6V277.8h9.6v3.9c1.2-1.9,3.2-4.6,7.9-4.6c5.8,0,10.3,3.8,10.3,11.9V305z" transform="translate(-702 -265)" />
    </svg>
    <span>Continue with LinkedIn</span>
  </button>

  {/* Twitter */}
  <button
    className="flex items-center w-59 bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
    <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 -4 48 48">
      <path fill="#00AAEC" d="M48,9.4c-1.8,0.8-3.6,1.3-5.5,1.5c2-1.2,3.6-3.1,4.3-5.3c-1.9,1.1-4,1.9-6.3,2.3c-1.8-2-4.3-3.2-7-3.2c-5.3,0-9.5,4.7-8.3,10C16,14.1,8.5,10.7,3.7,5.2C2,8.1,2.9,11.8,5.7,13.6c-1.6,0-3.1-0.5-4.3-1.3c0,3.9,2.7,7.2,6.3,8c-1.2,0.3-2.6,0.4-3.9,0.1c1.1,3.5,4.3,6,8.1,6c-3.1,2.4-7,3.9-11.3,3.9c-0.7,0-1.4,0-2.1-0.1c4.1,2.6,9,4.1,14.2,4.1c17.1,0,26.7-14.5,26.7-27c0-0.4,0-0.8,0-1.2C45,13.1,46.7,11.3,48,9.4Z" />
    </svg>
    <span>Continue with Twitter</span>
  </button>

  {/* Facebook */}
  <button
    className="flex items-center w-59 bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
    <svg className="h-6 w-6 mr-2" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path fill="#4460A0" d="M26.7,24H23v20h-6V24h-4v-5.7h4v-3.5c0-5.6,3.3-8.8,8.4-8.8c2.4,0,4.8,0.4,4.8,0.4v5.2h-2.7c-2.6,0-3.3,1.6-3.3,3.2v3.5h5.6L34,24h-4.7z" />
    </svg>
    <span>Continue with Facebook</span>
  </button>

  {/* GitHub */}
  <button onClick={() => signIn("github")}
    className="flex items-center w-59 bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
    <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000">
      <path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.11.82-.258.82-.577v-2.255c-3.338.726-4.033-1.416-4.033-1.416-.546-1.386-1.333-1.754-1.333-1.754-1.09-.745.084-.729.084-.729 1.205.084 1.84 1.24 1.84 1.24 1.07 1.835 2.807 1.305 3.492.998.11-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.932 0-1.31.47-2.38 1.236-3.22-.123-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.403c1.018.005 2.043.138 3.003.403 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.874.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.804 5.625-5.475 5.922.43.372.814 1.1.814 2.222v3.293c0 .32.218.694.825.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
    <span>Continue with GitHub</span>
  </button>

  {/* Apple */}
  <button
    className="flex items-center w-59 bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
    <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill="#000" d="M16.365 1.43c0 1.14-.417 2.097-1.25 2.876-.835.78-1.758 1.21-2.77 1.21-.053-.974.308-1.867 1.08-2.67.773-.804 1.724-1.245 2.852-1.316.033.3.05.59.05.9zm3.37 17.477c-.414.957-.965 1.79-1.656 2.5-.84.86-1.74 1.29-2.697 1.29-.666 0-1.47-.194-2.41-.58-.94-.387-1.565-.58-1.875-.58-.36 0-.9.194-1.63.58-.73.387-1.36.58-1.89.58-.91 0-1.82-.43-2.74-1.29-.69-.71-1.24-1.543-1.66-2.5-.5-1.16-.75-2.303-.75-3.43 0-1.317.33-2.46.98-3.43.653-.97 1.506-1.46 2.56-1.46.506 0 1.183.194 2.03.58.85.387 1.4.58 1.66.58.2 0 .81-.213 1.83-.64.98-.387 1.81-.55 2.49-.49 1.84.147 3.24.996 4.2 2.55-.83.54-1.54 1.307-2.13 2.3-.59.99-.886 2.037-.886 3.14 0 1.127.252 2.27.76 3.43z" />
    </svg>
    <span>Continue with Apple</span>
  </button>

</div>

    </div>
  )
}

export default Login