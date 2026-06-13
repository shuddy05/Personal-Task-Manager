import React from "react";
import heroImage from "../assets/Component 1.png";
import { Link } from "react-router-dom";
const CoverPage = () => {
  return (
    <div className="">
      <section className="layout flex flex-col lg:flex-row justify-between gap-15">
        <div className="w-full lg:w-1/2 flex flex-col gap-5  ">
          <h1 className="hidden lg:block text-[24px] md:text-[35px] lg:text-[45px] font-semibold  ">
            Manage your Tasks on <br />
            <span className="text-[#974FD0]">TaskDuty </span>
          </h1>
          <h1 className=" lg:hidden text-[24px] md:text-[35px] lg:text-[45px] font-semibold  ">
            Manage your Tasks on 
            <span className="text-[#974FD0]"> TaskDuty </span>
          </h1>
          <p className="text-[#737171] text-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non tellus,
            sapien, morbi ante nunc euismod ac felis ac. Massa et, at platea
            tempus duis non eget. Hendrerit tortor fermentum bibendum mi nisl
            semper porttitor. Nec accumsan.
          </p>
          <Link
            to="/my-task"
            className="text-[24px]  bg-[#974FD0] rounded-[8px] py-3 px-4 w-[201px] text-white "
          >
            Go to My Tasks
          </Link>
        </div>
        <div className="">
          <img src={heroImage} alt="" className="w-full object-cover" />
        </div>
      </section>
    </div>
  );
};

export default CoverPage;
