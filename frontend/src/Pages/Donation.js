import React from 'react'
import Button from '../Utils&Shared/Button'
import Header from '../Utils&Shared/Header'

export default function Donation() {
    const handleDonate = e => {
        e.preventDefault()



        e.reset()
    }

    return (
        <div className=''>
            <Header />
            <div className="flex justify-center items-center min-h-screen">
                <div className="h-[650px] my-10 w-96 md:w-4/5 bg-white rounded-lg md:rounded-lg">
                    <div className="flex h-full w-full">
                        <div className="h-full p-3 rounded-lg w-full bg-white">
                            <p className="font-semibold text-xl mt-2 text-gray-700 text-center">Where would you like to give?</p>
                            <div className="mt-4 w-full flex flex-col">
                                <div className="flex gap-2 w-full"> <input className="appearance-none" type="radio" name="select_option" id="select_option1" /> <label className="w-full" htmlFor="select_option1">
                                    <div className="click_option h-16 gap-3 cursor-pointer transition-all w-full px-2 border-2 flex justify-center items-center">
                                        <p className="text-sm text-gray-800 font-semibold">Where it's needed most</p>
                                    </div>
                                </label> <input className="appearance-none" type="radio" name="select_option" id="select_option2" /> <label className="w-full" htmlFor="select_option2">
                                        <div className="click_option h-16 gap-3 cursor-pointer transition-all w-full px-2 border-2 flex justify-center items-center">
                                            <p className="text-sm text-gray-800 font-semibold">Send kids to camp</p>
                                        </div>
                                    </label> </div>
                                <div className="flex gap-2 w-full mt-4"> <input className="appearance-none" type="radio" name="select_option" id="select_option3" /> <label className="w-full" htmlFor="select_option3">
                                    <div className="click_option h-16 gap-3 cursor-pointer transition-all w-full px-2 border-2 flex justify-center items-center">
                                        <p className="text-sm text-gray-800 font-semibold">Diabetes Research</p>
                                    </div>
                                </label> <input className="appearance-none" type="radio" name="select_option" id="select_option4" /> <label className="w-full" htmlFor="select_option4">
                                        <div className="click_option h-16 gap-3 cursor-pointer transition-all w-full px-2 border-2 flex justify-center items-center">
                                            <p className="text-sm text-gray-800 font-semibold">Another Campaign</p>
                                        </div>
                                    </label> </div>
                            </div>
                            <p className="mt-3 font-semibold text-gray-900">Giving Options</p>
                            <div className="flex gap-2 -mt-5">
                                <div className="w-full "> <input className="appearance-none " type="radio" name="giving" id="giving1" /> <label htmlFor="giving1">
                                    <div className="selecting h-10 text-gray-700 font-semibold text-sm cursor-pointer transition-all justify-center items-center w-full border-2 flex ">
                                        <p>One Time Giving</p>
                                    </div>
                                </label> </div>
                                <div className="w-full "> <input className="appearance-none " type="radio" name="giving" id="giving2" /> <label htmlFor="giving2">
                                    <div className="selecting h-10 text-gray-700 font-semibold text-sm cursor-pointer transition-all justify-center items-center w-full border-2 flex ">
                                        <p>Monthly Giving</p>
                                    </div>
                                </label> </div>
                            </div>
                            <p className="mt-3 font-semibold text-gray-900">I would like to give:</p>
                            <div className="flex -mt-5 gap-2">
                                <div className="w-full "> <input className="appearance-none " type="radio" name="money" id="money1" /> <label htmlFor="money1" className="h-10 text-gray-700 font-semibold text-sm cursor-pointer transition-all justify-center items-center w-full border-2 flex ">$100</label> </div>
                                <div className="w-full "> <input className="appearance-none " type="radio" name="money" id="money2" /> <label htmlFor="money2" className="h-10 text-gray-700 font-semibold cursor-pointer transition-all text-sm justify-center items-center w-full border-2 flex ">$50</label> </div>
                                <div className="w-full "> <input className="appearance-none " type="radio" name="money" id="money3" /> <label htmlFor="money3" className="h-10 text-gray-700 font-semibold text-sm cursor-pointer transition-all justify-center items-center w-full border-2 flex ">$25</label> </div>
                                <div className="w-full "> <input className="appearance-none " type="radio" name="money" id="money4" /> <label htmlFor="money4" className="h-10 text-gray-700 font-semibold cursor-pointer transition-all text-sm justify-center items-center w-full border-2 flex ">Other</label> </div>
                            </div>
                            <div className="my-4 flex justify-between">
                                <Button btnText='Submit' customClassName='bg-gray-800 w-full' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
