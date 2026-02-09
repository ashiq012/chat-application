import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setOtherUsers } from "../redux/userSlice";
function useGetOtherUsers() {
    const dispatch = useDispatch();
  useEffect(() => {
    const getOtherUsers = async (req,res) => {
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.get(
          `http://localhost:3000/api/v1/user/getalluser`,
        );
        console.log(res);
        dispatch(setOtherUsers(res.data.users));
      } catch (error) {
        return res.status(500).json({
          message: "Something went wrong ❌",
          error: error.message,
        });
      }
    }
    getOtherUsers();
  },[]);
  return <div></div>;
}

export default useGetOtherUsers;
