import React from "react";
import { Link ,useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
function Signin() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const payload = {
        username: user.username,
        password: user.password,
      };
      const res = await axios.post(
        `http://localhost:3000/api/v1/user/login`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        },
      );
      if(res.data.success){
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.response?.data?.message || "Something went wrong ❌");
    }
    setUser({
      username: "",
      password: "",
    });
  };
  return (
    <div className="min-h-screen flex items-center justify-center  from-purple-500 via-pink-500 to-indigo-600">
      <div className="min-w-96 mx-auto">
        <div className="w-full p-6 rounded-xl shadow-xl bg-white/10 backdrop-blur-md border border-white/20">
          <h1 className="text-3xl font-bold text-center text-white mb-4">
            Login
          </h1>

          <form onSubmit={onSubmitHandler}>
            <div>
              <label className="label">
                <span className="label-text text-white">Username</span>
              </label>
              <input
                type="text"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                placeholder="Username"
                className="input input-bordered w-full h-10 bg-white/20 text-white placeholder-white/70"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <input
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="Password"
                className="input input-bordered w-full h-10 bg-white/20 text-white placeholder-white/70"
              />
            </div>
            <p className="text-center text-white my-2">
              Don't have an account?{" "}
              <Link to="/signup" className="underline text-blue-300">
                Sign up
              </Link>
            </p>

            <button
              type="submit"
              className="btn btn-block btn-sm mt-2 bg-white/20 text-white border border-white/30 hover:bg-white/30"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signin;
