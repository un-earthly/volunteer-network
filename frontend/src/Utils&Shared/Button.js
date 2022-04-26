import React from 'react'

export default function Button({ customClassName, btnText, handler }) {
    return (

        <button onClick={handler} className={`${customClassName} text-white hover:text-gray-800 px-8 py-2 duration-500 hover:bg-transparent border border-transparent hover:border-gray-700`}>{btnText}</button>

    )
}
