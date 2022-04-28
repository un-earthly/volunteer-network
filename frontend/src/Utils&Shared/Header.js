import { signOut } from 'firebase/auth'
import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, NavLink } from 'react-router-dom'
import auth from '../firebase.init'
import Button from './Button'
export default function Header() {
    const [user] = useAuthState(auth)
    const [open, setOpen] = useState(false)
    return (<>
        <nav className=' items-center justify-between container mx-auto p-5 sticky top-0 backdrop-blur-sm z-50 hidden md:flex'>
            <Link to='/'><img src="logo192.png" alt="" /></Link>
            <ul className='flex items-center justify-center'>
                <NavLink className='mx-1 rounded font-semibold hover:text-[#3F90FC] duration-500 px-4 py-2' to='/'>Home</NavLink>
                <NavLink className='mx-1 rounded font-semibold hover:text-[#3F90FC] duration-500 px-4 py-2' to='/donation'>Donation</NavLink>
                <NavLink className='mx-1 rounded font-semibold hover:text-[#3F90FC] duration-500 px-4 py-2' to='/events'>Events</NavLink>
                {
                    user ? <>
                        <Button btnText='Sign Out' handler={() => signOut(auth)} customClassName='bg-gray-800 mx-1 rounded-md' />
                    </>
                        :
                        <>
                            <Link to='/login'>
                                <Button customClassName='bg-[#3F90FC] mx-1 rounded-md hover:border-[#3F90FC] hover:text-[#3F90FC]' btnText='Login' />
                            </Link>
                        </>
                }
                <Link to='/admin'><Button customClassName='bg-gray-800 mx-1 rounded-md' btnText='Admin' /></Link>
            </ul>


        </nav>

        <nav className='md:hidden'>
            <div className='flex justify-around items-center'>

                <Link to='/'><img src="logo192.png" className='w-3/4' alt="" /></Link>
                <svg onClick={() => setOpen(!open)} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-list" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </div>

            <ul className={`${open ? 'flex' : 'hidden'} items-center justify-center flex-col space-y-4`}>
                <NavLink className='mx-1 rounded font-semibold hover:text-[#3F90FC] duration-500 px-4 py-2' to='/'>Home</NavLink>
                <NavLink className='mx-1 rounded font-semibold hover:text-[#3F90FC] duration-500 px-4 py-2' to='/donation'>Donation</NavLink>
                <NavLink className='mx-1 rounded font-semibold hover:text-[#3F90FC] duration-500 px-4 py-2' to='/events'>Events</NavLink>
                {
                    user ? <>
                        <Button btnText='Sign Out' handler={() => signOut(auth)} customClassName='bg-gray-800 mx-1 rounded-md' />
                    </>
                        :
                        <>
                            <Link to='/login'>
                                <Button customClassName='bg-[#3F90FC] mx-1 rounded-md hover:border-[#3F90FC] hover:text-[#3F90FC]' btnText='Login' />
                            </Link>
                        </>
                }
                <Link to='/admin'><Button customClassName='bg-gray-800 mx-1 rounded-md' btnText='Admin' /></Link>
            </ul>
        </nav>

    </>
    )
}
