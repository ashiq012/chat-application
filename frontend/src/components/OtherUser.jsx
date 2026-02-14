import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../redux/userSlice";
function OtherUser(props) {
  const user = props.user;
  const dispatch = useDispatch();
  const selectedUserHandler = (user) => {
    dispatch(setSelectedUser(user));
  };
  const { selectedUser } = useSelector(store => store.user);
  return (
    <div>
      <div
        onClick={() => selectedUserHandler(user)}
        className={`flex gap-2 items-center rounded p-2 cursor-pointer hover:bg-zinc-400 ${
          selectedUser?._id === user._id ? "bg-zinc-400" : ""
        }`}
      >
        <div className="avatar avatar-online">
          <div className="w-12 rounded-full overflow-hidden">
            <img src={user?.profilePhoto} />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between gap-2">
            <p>{user?.fullname}</p>
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1"></div>
    </div>
  );
}

export default OtherUser;
