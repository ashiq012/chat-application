import React from "react";
import "./App.css";
import Homepage from "./components/Homepage";
import Signup from "./components/Signup";
import Login from "./components/Signin";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect,useState } from "react";
import { io } from "socket.io-client";
import { useDispatch } from "react-redux";
import { setOnlineUser } from "./redux/userSlice";
import { setSocket } from "./redux/socketSlice";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
function App() {
  const { authUser } = useSelector((store) => store.user);
  const {socket} = useSelector((store)=>store.socket)
  const dispatch = useDispatch()
  useEffect(() => {
    if (authUser) {
      const newSocket = io("http://localhost:3000",{
        query:{
          userId:authUser._id
        }
      });
      dispatch(setSocket(newSocket))
      newSocket.on("getOnlineUsers",(users)=>{
        dispatch(setOnlineUser(users))
      })
      return ()=>socket.close()
    }else{
      if(socket){
        socket.disconnet();
        dispatch(setSocket(null))
      }
    }
  }, [authUser]);
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
