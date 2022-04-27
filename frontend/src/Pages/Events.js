import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Utils&Shared/Header'
import SingleEvent from '../Utils&Shared/SingleEvent'

export default function Events() {
    const [events, setEvents] = useState([])
    useEffect(() => {
        axios.get('http://localhost/event')
            .then(data => setEvents(data.data))
    }, [])
    const handler = id => {
        const confirm = window.confirm('are you sure?')
        if (confirm) {
            axios.delete(`http://www.localhost/event/${id}`)
            setEvents(events.filter(currentId => currentId._id !== id))
        }


    }
    return (
        <div className=''>
            <Header />
            <div className='p-14'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {
                        events.map(eve => {
                            return <SingleEvent key={eve._id} title={eve.eventTitle} handler={handler} img={eve.img} id={eve._id} desc={eve.desc} date={eve.date} />
                        })
                    }
                </div>

                <Link className='text-center flex items-center justify-center text-red-600 font-semibold text-xl mt-4' to='/addevents'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" classname="bi bi-plus-lg" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                </svg>Want  to Add More?</Link>
            </div>
        </div>
    )
}
