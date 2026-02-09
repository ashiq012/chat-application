import React from "react";
import OtherUser from "./OtherUser";
import useGetOtherUsers from "../Hooks/useGetOtherUsers";
import { useSelector } from "react-redux";

function OtherUsers() {
  useGetOtherUsers();
  const {otherUsers} = useSelector(store=>store.user)
  if(!otherUsers) return;
//this called early return in react when we dont have data to render the component and we want to avoid rendering the component until we have the data to render it


  return (
    <div className="overflow-auto">
      {
        otherUsers?.map((user)=>{
          return (
            <OtherUser key={user._id} user={user}/>
          )
        })
      }
      
    </div>
  );
}

export default OtherUsers;
