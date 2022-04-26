import React from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom'
import auth from '../firebase.init'

export default function Login() {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth)
  const navigate = useNavigate()
  if (user) {
    navigate('/')
  }
  return (
    <div className="bg-[#E5E5E5] flex items-center justify-center flex-col p-10">
      <Link to='/'><img src="logo192.png" className='block mx-auto' alt="" /></Link>
      <div className="h-96 py-64 mt-20 w-1/2 bg-white border-2 border-[#ABABAB] flex items-center justify-center flex-col">
        <h2 className="text-3xl font-semibold my-3">Login With</h2>
        <div className='w-3/4 mx-auto p-4 py-3 my-3 rounded-full cursor-pointer flex items-center border' onClick={() => signInWithGoogle()}>
          <img src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png" className='h-10' alt="" />
          <p className="text-center block w-full">Continue with Google</p>
        </div>
        <p>Dont have an account? <Link to='/register' className='text-blue-500'>Register Now</Link></p>
      </div>
    </div>
  )
}
