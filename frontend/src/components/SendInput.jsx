import axios from "axios";
import React, { useState } from "react";
import { IoMdSend } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messageSlice";
function SendInput() {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const { selectedUser } = useSelector((store) => store.user);
  const { messages } = useSelector((store) => store.message); 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:3000/api/v1/message/send/${selectedUser._id}`,
        { message },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        },
      );
      dispatch(setMessages([...messages, res.data.newMessage]));
    } catch (error) {
      console.log(error);
    }
    setMessage('')
  };
  return (
    <form className="my-2 mx-8" onSubmit={handleSubmit}>
      <div className="relative w-full">
        <input
        value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border rounded-lg px-4 py-2 md:py-3 text-sm bg-gray-800 text-white"
          type="text"
          placeholder="send message..."
        />
        <button
          type="submit"
          className="absolute inset-y-0 pr-4 end-0 flex items-center"
        >
          <IoMdSend size="24px" />
        </button>
      </div>
    </form>
  );
}

export default SendInput;
