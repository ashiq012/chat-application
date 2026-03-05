import React from "react";
import OtherUser from "./OtherUser";
import useGetOtherUsers from "../Hooks/useGetOtherUsers";
import { useSelector } from "react-redux";

function OtherUsers({ search }) {
  useGetOtherUsers();
  const { otherUsers } = useSelector((store) => store.user);

  if (!otherUsers) return;

  const filteredUsers = otherUsers.filter((user) =>
    user.fullname.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="overflow-auto flex-1">
      {filteredUsers.map((user) => {
        return <OtherUser key={user._id} user={user} />;
      })}
    </div>
  );
}

export default OtherUsers;