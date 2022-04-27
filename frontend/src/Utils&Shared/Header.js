import { signOut } from 'firebase/auth'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, NavLink } from 'react-router-dom'
import auth from '../firebase.init'
import Button from './Button'
export default function Header() {
    const [user] = useAuthState(auth)
    return (
        <nav className='flex items-center justify-between container mx-auto p-5 sticky top-0 backdrop-blur-sm z-50'>
            <Link to='/'><img src="logo192.png" alt="" /></Link>
            <ul className='flex items-center justify-center'>
                <NavLink className='mx-1 rounded font-semibold hover:text-[#3F90FC] duration-500 px-4 py-2' to='/'>Home</NavLink>
                <NavLink className='mx-1 rounded font-semibold hover:text-[#3F90FC] duration-500 px-4 py-2' to='/donation'>Donation</NavLink>
                <NavLink className='mx-1 rounded font-semibold hover:text-[#3F90FC] duration-500 px-4 py-2' to='/events'>Events</NavLink>
                <NavLink className='mx-1 rounded font-semibold hover:text-[#3F90FC] duration-500 px-4 py-2' to='/blog'>Blog</NavLink>
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
    )
}
