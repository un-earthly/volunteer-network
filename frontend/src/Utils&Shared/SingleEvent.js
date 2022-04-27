import axios from 'axios'
import React from 'react'
import Button from './Button'

export default function SingleEvent({ title, img, date, id }) {
    console.log(title, id, date, img)
    const handler = id => {
        const confirm = window.confirm('are you sure?')
        confirm ?
            axios.post(`http://www.localhost.com/event/${id}`)
                .then()
            : alert('cancelation failed')
        // console.log(id)
    }
    return (
        <div>
            <img src={img} alt="" />
            <div>
                <p>{title}</p>
                <p>{date}</p>
            </div>
            <Button btnText='Cancel' customClassName='bg-gray-800' handler={() => handler(id)} />
        </div>
    )
}
