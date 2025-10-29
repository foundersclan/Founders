import { useContext, useState } from "react";
import { Link, useNavigate,NavLink } from "react-router-dom";
import { useSignup } from "./viewmodels/useSignup";
import {Loader} from "../../components/components/loading"
// import { token } from "./repository/token";
const Signup = () => {
  const { role, userdata, errors, setRole, setUserData,handleSignup,loading,isLoggedIn } = useSignup();
  console.log(isLoggedIn);
  // console.log(token);
  
  return (
    <div className='flex justify-center items-center h-screen'>
     {
      loading && <Loader/>
     }
      <div className="min-w-full min-h-screen fixed ">
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
      <div className=" absolute bg-black/70 w-1/3  px-1 lg:px-8 py-6 border-2 shadow-2xl   border-zinc-600 rounded-xl shadow-black">
       <div className="mb-5">
          <h2 className=' text-4xl  font-semibold text-yellow-600 '>
            Register Now!
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
        <div className="mb-3">
          <input
            type="text"
            placeholder='First Name'
            value={userdata.firstName}
            onChange={(e) => {
              setUserData({
                ...userdata,
                firstName: e.target.value
              })
            }}
          className=' border border-zinc-500 text-lg text-white placeholder:text-zinc-400 px-2 py-2 w-full rounded-md outline-none'
          />
          {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
              )}
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder='Last Name'
            value={userdata.lastName}
            onChange={(e) => {
              setUserData({
                ...userdata,
                lastName: e.target.value
              })
            }}
           className=' border border-zinc-500 text-lg text-white placeholder:text-zinc-400 px-2 py-2 w-full rounded-md outline-none'
          />
          {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
              )}
        </div>

            <div className="text-left mb-3">
              <input
                type="email"
                placeholder="Email"
                value={userdata.email}
                onChange={(e) => setUserData({
                  ...userdata,
                  email: e.target.value
                })}
                className={`w-full py-2 px-2 text-lg text-white border border-zinc-500 placeholder:text-zinc-400 rounded-md  outline-0 `}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div className="text-left mb-3">
              <input
                type="password"
                placeholder="Password"
                value={userdata.password}
                onChange={(e) => setUserData({
                  ...userdata,
                  password: e.target.value
                })}
                className={`w-full py-2 px-2 text-lg text-white border border-zinc-500 placeholder:text-zinc-400 rounded-md  outline-0 `}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>
         

            <div className="text-left mb-3">
              <input
                type="tel"
                placeholder="Phone Number"
                value={userdata.phone}
                onChange={(e) => setUserData({
                  ...userdata,
                  phone: e.target.value
                })}
               className={`w-full py-2 px-2 text-lg text-white border border-zinc-500 placeholder:text-zinc-400 rounded-md  outline-0 `}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

         <div className="mb-2">
          <button
            type='button'
            onClick={handleSignup}
            className='hover:shadow-yellow-500 shadow-lg hover:-translate-y-1 transition-all w-full border border-yellow-500 text-yellow-500 text-center py-2  rounded-md text-xl'
          >
            Register to continue
          </button>
        </div>
        {/* <div className="flex flex-col justify-center items-center mb-8">
          <h1 className="text-white text-2xl">Or </h1>
          <div>
            < button onClick={handleGoogleSignIn} className="border border-gray-400 flex items-center gap-3 p-3 rounded-xl mt-3 text-2xl text-white">
              <img src="/assets/google.svg " alt="" />
              Sign In using Google
            </button>
          </div>
        </div> */}
        <div className="text-center">
          <h1 className="text-white">Or</h1>
          <h2 className='text-white text-md'>Already Have an account? <NavLink className=' text-yellow-500 font-bold' to={'/login'}>Login</NavLink></h2>
        </div>
      </div>
    </div>
  );
}

export default Signup;