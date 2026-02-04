import React from 'react'

function OtherUser() {
  return (
    <div>
      <div className="flex gap-2 items-center hover:bg-zinc-400 rounded p-2 cursor-pointer">
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
      <div className="divider my-0 py-0 h-1"></div>
    </div>
  )
}

export default OtherUser