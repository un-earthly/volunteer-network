import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SingleEvent from '../Utils&Shared/SingleEvent'

export default function Events() {
    const [events, setEvents] = useState([])
    useEffect(() => {
        axios.get('http://localhost/event')
            .then(data => setEvents(data.data))
    }, [])
    return (
        <div>
            {
                events.map(eve => {
                    return <SingleEvent key={eve._id} title={eve.eventTitle} img={eve.img} id={eve._id} desc={eve.desc} date={eve.date} />
                })
            }

        </div>
    )
}
