import React, { useEffect } from "react";
import Message from "./Message";
import useGetMessages from "../Hooks/useGetMessages";
import { useSelector } from "react-redux";
import useGetRealTimeMessage from "../Hooks/useGetRealTimeMessage";
function Messages() {
  useGetMessages();
  useGetRealTimeMessage();
  const { messages } = useSelector((store) => store.message);
  return (
    <div className="flex-1 px-2 md:px-4 overflow-y-auto">
      {messages &&
        messages?.map((message) => {
          return <Message key={message._id} message={message} />;
        })}
    </div>
  );
}

export default Messages;
