import React from "react";
import arrowBack from "../assets/Vector.png";
import { Link } from "react-router-dom";
const NewTask = () => {
  return (
    <div>
      <div className="layout">
        <div className="flex items-center gap-5 mb-10">
          <Link to="/my-task">
            <img src={arrowBack} alt="" />
          </Link>
          <h1 className="text-[30px] md:text-[50px] ">New Task</h1>
        </div>
        <form className="flex flex-col gap-10">
          <div className="relative">
            <label className="text-[#9C9C9C] text-lg md:text-2xl absolute left-10 top-[-15px] bg-white ">
              Task Title
            </label>
            <input
              type="text"
              placeholder="E.g Project Defense, Assignment ...
              "
              className="w-full h-[84px] p-5 border border-[#B8B6B6] outline-none rounded-md "
            />
          </div>
          <div className="relative">
            <label className="text-[#9C9C9C] text-lg md:text-2xl absolute left-10 top-[-15px] bg-white ">
              Description
            </label>
            <input
              type="text"
              placeholder="Briefly describe your task"
              className="w-full h-[230px] p-5 border border-[#B8B6B6] outline-none rounded-md "
            />
          </div>
          <div className="relative">
            <label className="text-[#9C9C9C] text-lg md:text-2xl absolute left-10 top-[-15px] bg-white ">
              Tags
            </label>
            <select className="w-full text-[#9C9C9C]  p-5 border border-[#B8B6B6] outline-none rounded-md">
              <option>Urgent</option>
              <option>Important</option>
            </select>
          </div>
          <button className="w-full bg-[#974FD0] text-white py-3 px-5 rounded-lg mb-4 cursor-pointer text-[18px] ">Done</button>
        </form>
        <h1 className="text-[#974FD0] cursor-pointer text-center hover:underline hover:underline-[#974FD0] ">
          Back To Top
        </h1>
      </div>
    </div>
  );
};

export default NewTask;
