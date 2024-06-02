import React from 'react';
import { Link } from "react-router-dom";
import Navbar from './Navbar';

const Contact = () => {
  return (
      <>
          <Navbar/>
      <section className="bg-primary text-white h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col gap-2 items-center">
          <p className="text-lg font-semibold">
             Contact Me
          </p>
        </div>

        <div className="flex flex-col gap-5 items-center text-center py-10 px-10 xl:px-72">
          <h1 className="xl:text-[50px] text-[45px] font-bold">Get In Touch</h1>
          <p className="text-lg tracking-wide">
            I'm currently looking for any new opportunities, my inbox is always
            open. Whether you have a question, want to collaborate on a project
            or just want to say hi, I'll definitely get back to you!
          </p>
          <Link to="mailto:actomaniaaquila@gmail.com">
            <button className="border border-secondary rounded-md hover:bg-secondary transition-all duration-500 p-2 text-xl font-semibold w-40">
              Say Hello
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Contact