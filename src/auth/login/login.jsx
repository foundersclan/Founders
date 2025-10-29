import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useLogin } from "./viewmodels/uselogin";
import { Loader } from "../../components/components/loading";

export const Login = () => {
  const {
    role,
    setRole,
    userCred,
    setUserCred,
    errors,
    handleLogin,
    loading,
    isLoggedIn,
    handleGoogleSignIn
  } = useLogin();
  console.log(isLoggedIn);

  return (
    <div className='flex  relative justify-center items-center h-screen '>
      {loading && <Loader />}
      <div className="min-w-full h-full fixed ">
        <video
          autoPlay
          muted
          loop
          playsInline
          className=" top-0 left-0 w-full h-full object-cover z-10"
        >
          <source src="/assets/bgvideo.mp4" type="video/mp4" />
        </video>
      {/* <div className="bg-black z-20 absolute w-full h-full opacity-60"/> */}
      </div>
      <div className="login_Form absolute bg-black/70 w-1/3  0 px-1 lg:px-8 py-6 border-2 shadow-2xl   border-zinc-600 rounded-xl shadow-black">
        <div className="mb-6">
          <h2 className=' text-4xl  font-semibold text-yellow-600 '>
            Welcome Back!
          </h2>
        </div>
        {/* <div className="flex justify-center gap-3 mb-4">
          <button
            type="button"
            className={`px-6 py-2 rounded-full border font-Lato ${role === "owner"
              ? "bg-yellow-500 text-white border-yellow-500"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            onClick={() => setRole("owner")}
          >
            Owner
          </button>
          <button
            type="button"
            className={`px-6 py-2 rounded-full border font-Lato ${role === "buyer"
              ? "bg-yellow-500 text-white border-yellow-500"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            onClick={() => setRole("buyer")}
          >
            Buyer
          </button>
        </div> */}
       
            <div className="mb-3 ">
              <input
                type="email"
                placeholder='Email Address'
                value={userCred.email}
                onChange={(e) => {
                  setUserCred({
                    ...userCred,
                    email: e.target.value
                  })
                }}
                className=' border border-zinc-500 text-xl text-white placeholder:text-zinc-400 px-2 py-3 w-full rounded-md outline-none'
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div className="mb-3">
              <input
                type="password"
                placeholder='Password'
                value={userCred.password}
                onChange={(e) => {
                  setUserCred({
                    ...userCred,
                    password: e.target.value
                  })
                }}
                className=' border border-zinc-500 text-xl text-white placeholder:text-zinc-400 px-2 py-3 w-full rounded-md outline-none'
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>
        
          <div className="mb-3">
            <input
              type="tel"
              placeholder='Phone Number'
              value={userCred.phone}
              onChange={(e) => {
                setUserCred({
                  ...userCred,
                  phone: e.target.value
                })
              }}
              className=' border border-zinc-500 text-xl text-white placeholder:text-zinc-400 px-2 py-3 w-full rounded-md outline-none'
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

        <div className="mb-2">
          <button
            type='button'
            onClick={handleLogin}
            className='hover:shadow-yellow-500 shadow-md hover:-translate-y-1 transition-all w-full border border-yellow-500 font-medium text-yellow-500 text-center py-2  rounded-md text-xl'
          >
            Login 
          </button>
        </div>
        <div className="flex flex-col justify-center items-center mb-2">
          <h1 className="text-white text-xl">Or </h1>
          <div>
            < button onClick={handleGoogleSignIn} className="border border-gray-400 flex items-center gap-3 p-3 rounded-xl mt-2 text-xl text-white">
              <img src="/assets/google.svg " alt="" />
              Sign In using Google
            </button>
          </div>
        </div>
        <div>
          <h2 className='text-white text-xl'>Don't Have an account? <NavLink className=' text-yellow-500 ' to={'/signup'}>Signup</NavLink></h2>
        </div>
      </div>
    </div>
  );
}