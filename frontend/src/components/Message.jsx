import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";

function Message({ message }) {
  const scroll = useRef();
  const { authUser, selectedUser } = useSelector((store) => store.user);

  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  if (!authUser) return null;

  const isSender = authUser._id === message.senderId;

  const dateAndTime = new Date(message.createdAt).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div ref={scroll}>
      <div className={`chat ${isSender ? "chat-end" : "chat-start"}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="profile"
              src={
                isSender ? authUser.profilePhoto : selectedUser?.profilePhoto
              }
            />
          </div>
        </div>

        <div className="chat-header">
          <time className="text-xs opacity-50 text-black">{dateAndTime}</time>
        </div>

        <div className="chat-bubble">{message.message}</div>
      </div>
    </div>
  );
}

export default Message;
