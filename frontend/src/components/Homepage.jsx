import React from "react";
import SideBar from "./SideBar";
import MessageContainer from "./MessageContainer";

function Homepage() {
  return (
    <div className="flex sm:h-112.5 md:h-112.5 rounded-lg overflow-hidden  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <SideBar />
      <MessageContainer />
    </div>
  );
}

export default Homepage;
