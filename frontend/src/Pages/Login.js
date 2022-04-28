import React from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom'
import auth from '../firebase.init'

export default function Login() {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth)
  const navigate = useNavigate()
  if (user) {
    navigate('/register')
  }
  return (
    <div className="md:bg-[#E5E5E5] flex items-center justify-center flex-col md:p-10">
      <Link to='/'><img src="logo192.png" className='block mx-auto' alt="" /></Link>
      <div className="h-96 py-64 md:mt-20 md:w-1/2 md:bg-white md:border-2 md:border-[#ABABAB] flex items-center justify-center flex-col">
        <h2 className="text-3xl font-semibold my-3">Login With</h2>
        <div className='md:w-3/4 mx-auto p-4 py-3 my-3 rounded-full cursor-pointer flex items-center border border-gray-800' onClick={() => signInWithGoogle()}>
          <img src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png" className='h-10' alt="" />
          <p className="text-center block w-full">Continue with Google</p>
        </div>
      </div>
    </div>
  )
}
