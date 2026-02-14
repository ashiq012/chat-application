import axios from "axios";
import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { setMessages } from "../redux/messageSlice";

function useGetMessages() {
  const dispatch = useDispatch();
  const { selectedUser } = useSelector(store => store.user);
  useEffect(() => {
    const getMessage = async () => {
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.get(
          `http://localhost:3000/api/v1/message/${selectedUser?._id}`
        );
        dispatch(setMessages(res.data?.conversation?.message))
      } catch (error) {
        console.log(error);
      }
    };
    getMessage();
  }, [selectedUser]);
}

export default useGetMessages;
