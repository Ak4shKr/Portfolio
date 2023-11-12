import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import Python from "../assets/python.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";
import CPP from "../assets/c-logo.png";

import ProgressBar from "@ramonak/react-progress-bar";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full h-fit pb-[-10px]  bg-[#0a192f] text-gray-300"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4">// These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4  gap-4  text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
            <ProgressBar
              className="pb-2 mt-[-16px] w-[80%] mx-auto "
              labelSize="9px"
              height={8}
              completed={80}
              bgColor="rgb(219 39 119)"
            />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-4">CSS</p>
            <ProgressBar
              className="pb-2 mt-[-16px] w-[80%] mx-auto "
              labelSize="9px"
              height={8}
              completed={80}
              bgColor="rgb(219 39 119)"
            />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="my-4">JAVASCRIPT</p>
            <ProgressBar
              className="pb-2 mt-[-16px] w-[80%] mx-auto "
              labelSize="9px"
              height={8}
              completed={50}
              bgColor="rgb(219 39 119)"
            />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4">REACT</p>
            <ProgressBar
              className="pb-2 mt-[-16px] w-[80%] mx-auto "
              labelSize="9px"
              height={8}
              completed={70}
              bgColor="rgb(219 39 119)"
            />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="HTML icon" />
            <p className="my-4">GITHUB</p>
            <ProgressBar
              className="pb-2 mt-[-16px] w-[80%] mx-auto "
              labelSize="9px"
              height={8}
              completed={30}
              bgColor="rgb(219 39 119)"
            />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="HTML icon" />
            <p className="my-4">NODE JS</p>
            <ProgressBar
              className="pb-2 mt-[-16px] w-[80%] mx-auto "
              labelSize="9px"
              height={8}
              completed={60}
              bgColor="rgb(219 39 119)"
            />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Mongo} alt="HTML icon" />
            <p className="my-4">MONGO DB</p>
            <ProgressBar
              className="pb-2 mt-[-16px] w-[80%] mx-auto "
              labelSize="9px"
              height={8}
              completed={60}
              bgColor="rgb(219 39 119)"
            />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="HTML icon" />
            <p className="my-4">TAILWIND</p>
            <ProgressBar
              className="pb-2 mt-[-16px] w-[80%] mx-auto "
              labelSize="9px"
              height={8}
              completed={70}
              bgColor="rgb(219 39 119)"
            />
            {/* <progress className="bg-red-500" max="100" value="50"></progress> */}
          </div>
          <div className="max-h-[136px] shadow-md shadow-[#040c16] md:col-start-2  hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={Python}
              alt="HTML icon"
              style={{ width: "75px" }}
            />
            <p className="my-4">PYTHON</p>
            <ProgressBar
              className="pb-2 pt-0 mt-[-12px] w-[80%] mx-auto "
              labelSize="9px"
              height={8}
              completed={20}
              bgColor="rgb(219 39 119)"
            />
          </div>
          <div className="max-h-[136px] shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto "
              src={CPP}
              alt="HTML icon"
              style={{ width: "70px" }}
            />
            <p className="mt-3 mb-5 ">C++</p>
            <ProgressBar
              className="pb-2 pt-0 mt-[-14px] w-[80%] mx-auto "
              labelSize="9px"
              height={8}
              completed={70}
              bgColor="rgb(219 39 119)"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
