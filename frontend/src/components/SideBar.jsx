import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import OtherUsers from "./OtherUsers";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  setAuthUser,
  setOtherUsers,
  setSelectedUser,
} from "../redux/userSlice";
import { setMessages } from "../redux/messageSlice";

function SideBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { selectedUser, otherUsers } = useSelector((store) => store.user);

  const [search, setSearch] = useState("");

  const logout = async () => {
    try {
      const res = await axios.get("https://chat-application-f2wz.onrender.com/api/v1/user/logout");
      toast.success(res.data.message);
      dispatch(setAuthUser(null));
      dispatch(setOtherUsers(null));
      dispatch(setSelectedUser(null));
      dispatch(setMessages(null));
      navigate("/login");
      window.location.reload();
    } catch (error) {
      return error.response.data.message;
    }
  };

  return (
    <div
      className={`p-4 border-r border-slate-500 flex flex-col w-full md:w-70 ${
        selectedUser ? "hidden md:flex" : "flex"
      }`}
    >
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="searching..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className="input input-bordered rounded-md bg-white text-black outline-none w-full"
        />
        <button className="btn bg-slate-500 border-none">
          <CiSearch size="22px" />
        </button>
      </div>

      <div className="divider px-2"></div>

      <OtherUsers search={search} />

      <div className="flex justify-start mt-auto">
        <button onClick={logout} className="btn btn-sm rounded-xl">
          Logout
        </button>
      </div>
    </div>
  );
}

export default SideBar;