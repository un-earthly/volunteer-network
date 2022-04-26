import { signOut } from 'firebase/auth'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, NavLink } from 'react-router-dom'
import auth from '../firebase.init'
import Button from './Button'
export default function Header() {
    const [user] = useAuthState(auth)
    return (
        <nav className='flex items-center justify-between container mx-auto p-5 sticky top-0 backdrop-blur-sm'>
            <Link to='/'><img src="logo192.png" alt="" /></Link>
            <ul className='flex items-center justify-center'>
                <NavLink className='mx-1 rounded font-semibold hover:bg-[#3F90FC] hover:text-white duration-500 px-8 py-2' to='/'>Home</NavLink>
                <NavLink className='mx-1 rounded font-semibold hover:bg-[#3F90FC] hover:text-white duration-500 px-8 py-2' to='/donation'>Donation</NavLink>
                <NavLink className='mx-1 rounded font-semibold hover:bg-[#3F90FC] hover:text-white duration-500 px-8 py-2' to='/events'>Events</NavLink>
                <NavLink className='mx-1 rounded font-semibold hover:bg-[#3F90FC] hover:text-white duration-500 px-8 py-2' to='/blog'>Blog</NavLink>
                {
                    user ? <>
                        <Link to='/admin'><Button btnText='Admin' customClassName='bg-gray-800' /></Link>
                        <Button btnText='Sign Out' handler={() => signOut(auth)} customClassName='bg-gray-800' />
                    </>
                        :
                        <>
                            <Link to='/login'>
                                <Button customClassName='bg-[#3F90FC] hover:border-[#3F90FC] hover:text-[#3F90FC]' btnText='Login' />
                            </Link>
                            <Link to='/register'><Button customClassName='bg-gray-800' btnText='Register' /></Link>
                        </>
                }
            </ul>


        </nav>
    )
}
