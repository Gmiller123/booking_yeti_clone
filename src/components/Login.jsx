import React from "react";

const Login = () => {
  return (
    <div className="py-32 lg:flex items-center justify-center">
      <div className="flex flex-col shadow-lg py-12  sm:px-4 md:px-48 px-8 lg:px-10 rounded-lg">
        <div className="flex flex-col items-center justify-center gap-5 tracking-wider mb-8">
          <h1 className=" text-2xl font-bold">Adventure Booking</h1>
          <h2 className=" text-lg font-medium">Merchant</h2>
          <h3 className="font-medium">Sign in to your account</h3>
        </div>
        <form action="" className=" flex flex-col">
          <label htmlFor="email address">Email Address</label>
          <input
            className="border border-gray-300 py-3 rounded-lg mt-2 mb-6 outline-none focus:border-primaryColor indent-3"
            type="email"
          />

          <label htmlFor="password">Password</label>
          <input
            className="border border-gray-300 py-3 rounded-lg mt-2 mb-6 outline-none focus:border-primaryColor indent-3"
            type="password"
          />

          <a className=" text-primaryColor text-sm" href="">
            Did you Forget your password?
          </a>

          <button className=" bg-primaryColor rounded-md text-white font-bold py-3 my-5">
            Sign up
          </button>
        </form>
        <div className=" lg:min-w-[400px] text-sm text-center">
          <p className="">
            Don't have an account?
            <a className="ml-1 text-primaryColor" href="/signup">
              Create a new Account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
