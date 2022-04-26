import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom'
import auth from '../firebase.init'
import Button from '../Utils&Shared/Button'

export default function Register() {
  const [user] = useAuthState(auth)
  const handleRegister = e => {
    e.preventDefault()


    const data = {
      name: user.displayName,
      email: user.email,
      date: e.target.date.value,
      desc: e.target.desc.value,
      role: e.target.role.value
    }
    console.log(data)
    e.target.reset()
  }
  return (
    <div className="bg-[#E5E5E5] flex items-center justify-center flex-col p-10">
      <Link to='/'><img src="logo192.png" className='block mx-auto' alt="" /></Link>
      <div className="h-96 py-64 mt-20 bg-white border-2 border-[#ABABAB] flex items-center justify-center flex-col w-1/2">
        <h2 className="text-3xl font-semibold my-3">Login With</h2>
        <form className='flex items-center justify-center flex-col w-full' onSubmit={handleRegister}>
          <input className='p-4 w-2/4 bg-gray-400 my-1' type="text" value={user?.displayName} readOnly disabled />
          <input className='p-4 w-2/4 bg-gray-400 my-1' type="email" value={user?.email} readOnly disabled />
          <input className='p-4 w-2/4 bg-gray-400 my-1' type="date" name='date' />
          <input className='p-4 w-2/4 bg-gray-400 my-1' type="text" name='desc' placeholder='describe your self' />
          <input className='p-4 w-2/4 bg-gray-400 my-1' type="text" name='role' />
          <Button btnText='submit' customClassName='bg-gray-800' />
        </form>

      </div>
    </div>
  )
}
