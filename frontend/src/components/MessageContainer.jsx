import React from 'react'
import SendInput from './SendInput'
import Messages from './Messages'
function MessageContainer() {
  return (
    <div className='md:min-w-125 flex flex-col'>
      <div className="flex gap-2 items-center bg-zinc-800 rounded p-2 cursor-pointer">
        <div className="avatar avatar-online">
          <div className="w-12 rounded-full">
            <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between gap-2">
            <p>Md Ashiq</p>
          </div>
        </div>
      </div>
      <Messages/>
     <SendInput/>
    </div>
  )
}

export default MessageContainer