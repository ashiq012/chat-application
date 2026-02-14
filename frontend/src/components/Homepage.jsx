import React from "react";
import SideBar from "./SideBar";
import MessageContainer from "./MessageContainer";
import Signin from "./Signin";
import { useSelector } from "react-redux";
function Homepage() {
  const { authUser } = useSelector((store) => store.user);
  return (
    <>
      {authUser ? (
        <div className="flex sm:h-112.5 md:h-112.5 rounded-lg overflow-hidden  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
          <SideBar />
          <MessageContainer />
        </div>
      ) : (
        <Signin />
      )}
    </>
  );
}

export default Homepage;
