import axios from 'axios'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom'
import auth from '../firebase.init'
import Button from '../Utils&Shared/Button'
import Sidebar from '../Utils&Shared/Sidebar'

export default function Register() {
  const [user] = useAuthState(auth)
  const navigate = useNavigate()
  const handleRegister = e => {
    e.preventDefault()


    const data = {
      name: user.displayName,
      email: user.email,
      date: e.target.date.value,
      desc: e.target.desc.value,
      role: e.target.role.value
    }
    axios.post('https://glacial-waters-98342.herokuapp.com/volunteer', data)
      .then(res => alert(`successFully Added with id: ${res.data.insertedId}`))
    e.target.reset()
    navigate('/admin')
  }
  return (

    <div className='flex bg-gray-300'>
      <Sidebar />
      <div className="bg-[#E5E5E5] flex items-center justify-center flex-col pb-10 flex-grow">
        <div className="pt-10 mt-14 bg-white border-2 border-[#ABABAB] flex items-center justify-center flex-col w-1/2 rounded-lg">
          <h2 className="text-3xl text-left font-semibold">Register volunteer</h2>
          <form className='flex items-center justify-center flex-col w-full p-14 space-y-5' onSubmit={handleRegister}>
            <input className='px-4 py-2 bg-red-50 border-b w-full outline-none border-b-[#C5C5C5]' type="text" value={user?.displayName} readOnly disabled />
            <input className='px-4 py-2 bg-red-50 border-b w-full outline-none border-b-[#C5C5C5]' type="email" value={user?.email} readOnly disabled />
            <input className='px-4 py-2 border-b w-full outline-none border-b-[#C5C5C5]' type="date" required name='date' />
            <input className='px-4 py-2 border-b w-full outline-none border-b-[#C5C5C5]' type="text" required name='desc' placeholder='describe your self' />
            <input className='px-4 py-2 border-b w-full outline-none border-b-[#C5C5C5]' type="text" required name='role' placeholder='Your Desired Role' />
            <Button btnText='Register' customClassName='bg-gray-800 w-full ' />
          </form>

        </div>
      </div >
    </div >
  )
}
