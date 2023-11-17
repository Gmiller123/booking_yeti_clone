import React from "react";

const Signup = () => {
  return (
    <div className=" md:flex items-center justify-center">
      <div className=" shadow-lg my-32 py-12 px-12 max-sm:px-6 max-sm:my-6">
        <div className="mb-6">
          <h1 className=" text-2xl font-black tracking-wider mb-3">Sign up</h1>
          <p className=" text-lg text-gray-800">
            Enter your details to register
          </p>
        </div>

        <form className=" grid grid-cols-2 gap-5" action="registration form">
          <div className="flex flex-col max-sm:col-span-2">
            <label htmlFor="First Name">First Name</label>
            <input
              className=" border border-gray-300 outline-none indent-2 rounded-md py-2 focus:border-primaryColor mt-2"
              type="text"
            />
          </div>
          <div className=" flex flex-col max-sm:col-span-2">
            <label htmlFor="Second Name">Last Name</label>
            <input
              className=" border border-gray-300 outline-none indent-2 rounded-md py-2 focus:border-primaryColor mt-2"
              type="text"
            />
          </div>
          <div className=" col-span-2 flex flex-col">
            <label htmlFor="Email Address">Email Address</label>
            <input
              className=" border border-gray-300 outline-none indent-2 rounded-md py-2 focus:border-primaryColor mt-2"
              type="email"
            />
          </div>
          <div className=" col-span-2 flex flex-col">
            <label htmlFor="Password">Password</label>
            <input
              className=" border border-gray-300 outline-none indent-2 rounded-md py-2 focus:border-primaryColor mt-2"
              type="passwor"
            />
          </div>
          <div className=" col-span-2 flex flex-col">
            <label htmlFor="Phone Number">Phone Numbers</label>
            <input
              className=" border border-gray-300 outline-none indent-2 rounded-md py-2 focus:border-primaryColor mt-2"
              type="phone"
            />
          </div>
          <div className=" col-span-2 flex flex-col">
            <label htmlFor="Secondary Number">Secondary Number(Optional)</label>
            <input
              className=" border border-gray-300 outline-none indent-2 rounded-md py-2 focus:border-primaryColor mt-2"
              type="phone"
            />
          </div>
          <div className=" col-span-2">
            <a
              href=""
              className=" bg-primaryColor w-full py-3 text-white font-bold tracking-wider rounded-lg block text-center"
            >
              Register
            </a>
          </div>
        </form>
        <div className=" flex items-center justify-center mt-4">
          <p>
            Already have an account?
            <a href="" className=" text-primaryColor ml-1">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
