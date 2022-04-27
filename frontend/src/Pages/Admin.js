import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Utils&Shared/Header'
import Sidebar from '../Utils&Shared/Sidebar'
import TableData from '../Utils&Shared/TableData'

export default function Admin() {
    const [volunteerData, setVolunteerData] = useState([])
    useEffect(() => {
        axios.get('http://localhost/volunteer')
            .then(res => setVolunteerData(res.data))
    }, [])
    const handleDelete = id => {
        axios.post(`http://localhost/volunteer/${id}`)
        setVolunteerData(volunteerData.filter(currentId => currentId._id !== id))
    }
    return (
        <div className='flex bg-gray-300'>
            <Sidebar />

            <div className='flex-grow'>
                <h1 className='bg-white text-2xl p-4'>Volunteer Register List</h1>
                <div className='bg-white rounded-3xl m-4  flex-grow shadow-md sm:rounded-lg pt-4 pb-10'>
                    <div className="relative  p-3">
                        <table className="w-full text-sm text-left text-gray-500 ">
                            <thead className="text-xs text-gray-700 uppercase  bg-gray-100">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Email ID
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Registating date
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Volunteer list
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {volunteerData.map(data => <TableData handleDelete={handleDelete} volunteerData={data} key={data._id} />)}
                            </tbody>
                        </table>
                    </div>
                    <Link className='text-center flex items-center justify-center text-red-600 font-semibold text-xl ' to='/register'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                    </svg>Want  to Add More?</Link>
                </div>
            </div>
        </div>
    )
}
