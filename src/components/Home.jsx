import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Image from "../assets/akash.jpg";
import { Link, Route, Routes } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div
        name="home"
        className="w-full h-screen grid grid-flow-col md:grid-cols-5 justify-center mx-auto bg-[#0a192f]"
      >
        {/* container */}
        <div className="container max-w-[1000px] md:col-span-4 mx-auto  px-4 pl-12 flex flex-col justify-center h-full">
          <p className="text-pink-600"> Hi, My name is</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
            Akash Kumar
          </h1>
          <h2 className="text-4xl md:text-7xl font-bold text-[#8892b0]">
            I'm a Full Stack Developer.
          </h2>
          <p className="text-[#8892b0] py-4 max-w-[700px]">
            I'm a full stack Developer specializing in building and occasionaly
            designing exceptional digital experiances. Currently, I'm focusing
            on building responsive full stack web applications.
          </p>
          <div>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-700  hover:border-pink-700">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </div>
        </div>
        <div className="my-auto cursor-pointer hover:scale-y-105 ml-[-75px] img-div">
          <img
            src={Image}
            alt="Logo Image"
            style={{ borderRadius: "20%", maxWidth: "60%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
