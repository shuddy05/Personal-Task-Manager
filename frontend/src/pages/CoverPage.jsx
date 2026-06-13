import React from "react";
import heroImage from "../assets/Component 1.png";
import { Link } from "react-router-dom";
const CoverPage = () => {
  return (
    <div className="">
      <section className="layout flex flex-col lg:flex-row justify-between gap-15">
        <div className="w-full lg:w-1/2 flex flex-col gap-5  ">
          <h1 className="text-[24px] md:text-[35px] lg:text-[45px] font-semibold">
            Manage your Tasks on{" "}
            <span className="text-[#974FD0] block lg:inline">TaskDuty</span>
          </h1>
          <p className="text-[#737171] text-base md:text-lg lg:text-xl leading-relaxed max-w-[500px]">
            TaskDuty helps you stay on top of everything that matters. Create
            tasks, set priorities, and track your progress all in one simple,
            clean dashboard. Whether it's school assignments, project deadlines,
            or daily to-dos, TaskDuty makes it easy to organize your day and
            focus on what's important, so nothing slips through the cracks.
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
