import React from "react";
import SendInput from "./SendInput";
import Messages from "./Messages";
import { useSelector } from "react-redux";
function MessageContainer() {
  const { selectedUser } = useSelector((store) => store.user);
  return (
    <>
      {selectedUser ? (
        <div className="md:min-w-125 flex flex-col">
          <div className="flex gap-2 items-center bg-zinc-800 rounded p-2 cursor-pointer">
            <div className="avatar avatar-online">
              <div className="w-12 rounded-full">
                <img src={selectedUser?.profilePhoto} />
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <div className="flex justify-between gap-2">
                <p>{selectedUser?.username}</p>
              </div>
            </div>
          </div>
          <Messages />
          <SendInput />
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center p-4">
          <h1 className="text-2xl text-white-500">Welcome to Chit-Chat</h1>
        </div>
      )}
    </>
  );
}

export default MessageContainer;
