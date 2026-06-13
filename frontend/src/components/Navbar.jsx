import React, { useState } from "react";
import logo from "../assets/Group 1.png";
import photo from "../assets/new pass.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 mb-5">
      <nav className="layout flex justify-between items-center py-3">
        <div className="flex items-center gap-2 md:gap-4">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <h1 className="text-lg md:text-2xl font-bold text-[#2D0050]">
            TaskDuty
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <Link to="new" className="cursor-pointer font-bold text-[22px]">
            New Task
          </Link>
          <Link to="/my-task" className="cursor-pointer font-bold text-[22px]">
            All Tasks
          </Link>
          <div className="w-[60px] h-[60px] rounded-full border-2">
            <img
              src={photo}
              alt=""
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <div className="md:hidden flex flex-col items-end gap-4 px-5 pb-5">
          <Link
            to="new"
            onClick={() => setOpen(false)}
            className="font-bold text-lg"
          >
            New Task
          </Link>
          <Link
            to="/my-task"
            onClick={() => setOpen(false)}
            className="font-bold text-lg"
          >
            All Tasks
          </Link>
          <div className="w-[50px] h-[50px] rounded-full border-2">
            <img
              src={photo}
              alt=""
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
