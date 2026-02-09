import React from 'react'

function OtherUser(props) {
  const user = props.user;
  return (
    <div>
      <div className="flex gap-2 items-center hover:bg-zinc-400 rounded p-2 cursor-pointer">
        <div className="avatar avatar-online">
          <div className="w-12 rounded-full overflow-hidden">
            <img src={user?.profilePhoto} />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between gap-2">
            <p>{user?.fullname}</p>
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1"></div>
    </div>
  )
}

export default OtherUser