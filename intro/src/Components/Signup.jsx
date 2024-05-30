import React from "react";

const Signup = () => {
  return (
    <>
      <section className="lg:flex lg:w-full lg:h-screen">
        <div className="lg:h-screen lg:w-1/2 bg-primary">hi my name is </div>
        <div className="mx-auto w-1/2 h-screen flex flex-col items-center justify-center space-y-5">
          <p className="font-semibold lg:text-4xl">Sign Up</p>
          <form className="flex w-full flex-col justify-center space-y-5 lg:border lg:border-grey lg:shadow-xl lg:px-8 lg:rounded-xl lg:py-7 lg:w-96">
            <div className="flex flex-col space-y-2">
              <label className="text-lg text-left lg:text-xl">Email</label>
              <input
                type="email"
                placeholder="mail@mailer.com"
                className="border border-grey rounded-lg px-5 py-2 focus:outline-none focus:border-secondary"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-lg text-left lg:text-xl">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="border border-grey rounded-lg px-5 py-2 focus:outline-none focus:border-secondary"
              />
            </div>
            <button className="font-bold bg-primary text-white py-2 rounded-lg ">
              Sign Up
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Signup;
