import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useWorks from '../Hooks/useWorks'
import Button from '../Utils&Shared/Button'
import Card from '../Utils&Shared/Card'
import Header from '../Utils&Shared/Header'


export default function Home() {
    const [works, setWorks] = useState([])

    useEffect(() => {
        axios.get('http://localhost/works')
            .then(function (response) {
                // handle success
                setWorks(response.data);
            })
    }, [])
    const handleSearch = e => {
        e.preventDefault()
        const query = e.target.searchtext.value
        if (query.length > 0) {
            axios.get(`http://localhost/works?work=${query}`)
                .then(res => setWorks(res))

        }
        else {
            console.log(false)
        }
    }
    return (
        <>
            <div className="bg-[url('https://i.ibb.co/k4gJ5V4/homebanner.png')] bg-no-repeat bg-[#ffffffcb] bg-blend-soft-light bg-cover h-96 w-full absolute top-0 -z-10"></div>

            <Header />
            <div className='mt-20'>
                <h1 className="text-4xl font-bold uppercase font-[Montserrat] text-center">I grow by helping people in need.</h1>
                <form onSubmit={handleSearch} className='flex items-center justify-end w-1/4 mx-auto border rounded-lg border-[#D6D6D6] mt-7'>
                    <input type="text" name='searchtext' placeholder='Search...' className='rounded-l-lg mx-auto px-5 py-2 flex-grow outline-none ' />
                    <Button btnText='Search' customClassName='
                    hover:bg-[#3F90FC]
                     hover:text-white
                      m-0 bg-[#3F90FC]
                       mx-0
                        px-5 
                        text-white py-2 
                        border-none
                        rounded-none
                         rounded-r-lg' />
                </form>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-10 p-4'>
                {
                    works.map(work => <Card key={work._id} img={work.img} title={work.title} />)
                }
            </div>
        </>
    )
}
