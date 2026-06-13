import React from "react";
import MyTaskCard from "../components/MyTaskCard";
import { Link } from "react-router-dom";
const MyTask = () => {
  return (
    <div>
      <div className="layout">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-[25px] md:text-[50px]">My Tasks</h1>
          <Link to="/new">
            <button className="cursor-pointer text-[24px] text-[#974FD0]">
              {" "}
              + Add New task
            </button>
          </Link>
        </div>
        <MyTaskCard />
      </div>
    </div>
  );
};

export default MyTask;
