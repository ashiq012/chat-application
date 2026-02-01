import React from "react";

function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center  from-purple-500 via-pink-500 to-indigo-600">
      <div className="min-w-96 mx-auto">
        <div className="w-full p-6 rounded-xl shadow-xl bg-white/10 backdrop-blur-md border border-white/20">
          <h1 className="text-3xl font-bold text-center text-white mb-4">
            Signup
          </h1>

          <form>
            <div>
              <label className="label">
                <span className="label-text text-white">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Full Name"
                className="input input-bordered w-full h-10 bg-white/20 text-white placeholder-white/70"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text text-white">Username</span>
              </label>
              <input
                type="text"
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
                placeholder="Password"
                className="input input-bordered w-full h-10 bg-white/20 text-white placeholder-white/70"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text text-white">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="input input-bordered w-full h-10 bg-white/20 text-white placeholder-white/70"
              />
            </div>

            <div className="flex gap-6 my-4 text-white">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="gender" className="radio" />
                Male
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="gender" className="radio" />
                Female
              </label>
            </div>

            <p className="text-center text-white my-2">
              Already have an account?
            </p>

            <button
              type="submit"
              className="btn btn-block btn-sm mt-2 bg-white/20 text-white border border-white/30 hover:bg-white/30"
            >
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
