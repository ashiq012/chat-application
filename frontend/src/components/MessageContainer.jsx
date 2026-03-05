import React from "react";
import SendInput from "./SendInput";
import Messages from "./Messages";
import { useSelector, useDispatch } from "react-redux";
import { IoArrowBack } from "react-icons/io5";
import { setSelectedUser } from "../redux/userSlice";

function MessageContainer() {
  const { selectedUser, onlineUser } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const isOnline = onlineUser?.includes(selectedUser?._id);

  return (
    <>
      {selectedUser ? (
        <div className="flex flex-col w-full md:min-w-112.5 lg:min-w-150">
          <div className="flex gap-2 items-center bg-zinc-800 rounded p-2 cursor-pointer">
            
            <button
              className="md:hidden mr-1"
              onClick={() => dispatch(setSelectedUser(null))}
            >
              <IoArrowBack size={22} />
            </button>

            <div className={isOnline ? "avatar avatar-online" : "avatar"}>
              <div className="w-12 rounded-full">
                <img src={selectedUser?.profilePhoto} alt="profile" />
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
        <div className="flex-1 hidden md:flex items-center justify-center p-4">
          <h1 className="text-2xl text-white-500">Welcome to Chit-Chat</h1>
        </div>
      )}
    </>
  );
}

export default MessageContainer;