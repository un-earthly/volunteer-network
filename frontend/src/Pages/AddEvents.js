import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../Utils&Shared/Button'
import Sidebar from '../Utils&Shared/Sidebar'
export default function AddEvents() {
  const navigate = useNavigate()
  const handleAddEvent = e => {
    e.preventDefault()
    const data = {
      eventTitle: e.target.eventTitle.value,
      desc: e.target.eventDesc.value,
      date: e.target.date.value,
      img: e.target.img.value,
    }
    axios.post('https://glacial-waters-98342.herokuapp.com/event', data)
    e.target.reset()
    navigate('/events')
  }
  return (
    <div className='flex bg-gray-300 md:flex-row flex-col'>
      <Sidebar />
      <div className='flex-grow'>

        <h1 className='bg-white text-2xl p-4'>Add An Event</h1>
        <form onSubmit={handleAddEvent} className="  m-4 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-xl mt-10">
            <div className="flex flex-col">
              <label htmlFor="eventTitle">Event Title </label>
              <input className='border-[#C9C9C9] border  rounded-sm px-3 py-2 outline-none' type="text" id='eventTitle' name='eventTitle' placeholder='Event Title Here...' />
            </div>
            <div className="flex flex-col">
              <label htmlFor="date">Event Title </label>
              <input className='border-[#C9C9C9] border  rounded-sm px-3 py-2 outline-none' type="date" id='date' name='date' placeholder='Event Title Here...' />
            </div>
            <div className="flex flex-col">
              <label htmlFor="eventDesc">Event Description </label>
              <textarea className='border-[#C9C9C9] border  rounded-sm px-3 py-2 outline-none' type="text" id='eventDesc' name='eventDesc' placeholder='Event Description Here...' />
            </div>
            <div className="flex flex-col">
              <label htmlFor="img">Event Image URL </label>
              <input className='border-[#C9C9C9] border  rounded-sm px-3 py-2 outline-none' type="type" id='img' name='img' placeholder='Event Img Url Here...' />
            </div>
          </div>
          <Button customClassName='bg-gray-800 rounded-md ml-auto block my-3' btnText='Submit' />
        </form>
      </div>
    </div>
  )
}
