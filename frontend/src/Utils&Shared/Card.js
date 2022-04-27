import React from 'react'

export default function Card({ img, title }) {
    const bg = ['421FCF', 'FFBD3E', '3F90FC', 'FFBD3E']
    const setBG = () => {
        const num = Math.floor(Math.random() * 4)
        return num;

    }
    setBG()
    return (
        <div className='w-full relative mx-auto' style={{ height: '320px' }}>
            <img src={img} className='w-full h-full' alt="" />
            <h3 style={{ backgroundColor: `#${bg[setBG()]}` }} className={`font-semibold absolute bottom-0 p-5 w-full rounded-b-lg text-center text-white`}>{title}</h3>
        </div>
    )
}
