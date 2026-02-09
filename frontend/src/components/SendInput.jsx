import React from 'react'
import { IoMdSend } from "react-icons/io";

function SendInput() {
  return (
    <form action="" className='my-2 mx-8'>
        <div className='relative w-full'>
            <input
            className='w-full border rounded-lg px-4 py-2 md:py-3 text-sm bg-gray-800 text-white'
            type="text" placeholder='send message...'/>
            <button className='absolute inset-y-0 pr-4 end-0 flex items-center'>
                <IoMdSend size="24px"/>
            </button>
        </div>
    </form>
  )
}

export default SendInput