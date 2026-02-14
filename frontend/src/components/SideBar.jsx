import React from "react";
import { CiSearch } from "react-icons/ci";
import OtherUsers from "./OtherUsers";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
function SideBar() {
  const navigate = useNavigate();
  const logout = async(req,res) => {
    try {
      const res = await axios.get("http://localhost:3000/api/v1/user/logout");
      toast.success(res.data.message);
      navigate("/login");
    } catch (error) {
      return error.response.data.message;
    }
  }
  return (
    <div className="p-4 border-r border-slate-500 flex flex-col ">
      <form action="" className="flex items-center gap-2">
        <input
          type="text"
          placeholder="searching..."
          className="input input-bordered rounded-md bg-white text-black outline-none"
        />
        <button type="submit" className="btn bg-slate-500 border-none">
          <CiSearch size="24px" />
        </button>
      </form>
      <div className="divider px-2"></div>
      <OtherUsers />
      <div className="flex justify-start mt-auto ">
        <button 
        onClick={logout}
        className="btn btn-sm rounded-xl">Logout</button>
      </div>
    </div>
  );
}

export default SideBar;
