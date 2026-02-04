import React from "react";
import { CiSearch } from "react-icons/ci";
import OtherUsers from "./OtherUsers";

function SideBar() {
  return (
    <div className="p-4 border-r border-slate-500 flex-col ">
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
    </div>
  );
}

export default SideBar;
