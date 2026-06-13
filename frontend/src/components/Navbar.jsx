import React from "react";
import logo from "../assets/Group 1.png";
import photo from "../assets/new pass.jpg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className=" border-b border-gray-300 mb-5 ">
      <nav className="layout flex justify-between items-center ">
        <div className="flex items-center gap-2 md:gap-4">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <h1 className="text-lg md:text-2xl font-bold text-[#2D0050] ">
            TaskDuty
          </h1>
        </div>
        <div className="flex items-center gap-2 md:gap-6">
          <button className="cursor-pointer font-bold text-lg md:text-[22px]">
            New Task
          </button>

          <Link
            to="/my-task "
            className="cursor-pointer font-bold text-lg md:text-[22px]"
          >
            All Tasks
          </Link>

          <div className="w-[60px] h-[60px] rounded-full border-2  ">
            <img
              src={photo}
              alt=""
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
