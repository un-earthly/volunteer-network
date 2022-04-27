import axios from 'axios'
import React from 'react'
import Button from './Button'

export default function SingleEvent({ title, img, date, id, handler }) {

    return (
        <div className='bg-white rounded-xl shadow-sm flex p-3'>
            <img className='h-32 rounded-xl' src={img} alt={title} />
            <div className='mx-3 w-full'>
                <p className='font-semibold text-xl capitalize font-[Montserrat]'>{title}</p>
                <p className='font-semibold text-xl capitalize'>{date}</p>
                <Button btnText='Cancel' customClassName='bg-gray-300 text-gray-800 font-bold ml-auto block' handler={() => handler(id)} />
            </div>
        </div>
    )
}
