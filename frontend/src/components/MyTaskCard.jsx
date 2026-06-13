import React from "react";
import edit from "../assets/clarity_note-edit-line.png";
import delet from "../assets/fluent_delete-24-regular.png";
import { Link } from "react-router-dom";
const MyTaskCard = () => {
  return (
    <main className="flex flex-col gap-5">
      <div className="w-full border border-[#B8B6B6] rounded-[10px] p-4 ">
        <div className="flex justify-between border-b border-[#B8B6B6] mb-3 py-3  ">
          <h1 className="text-[20px] md:text-[24px] text-[#F38383]">Urgent</h1>
          <div className="flex gap-4 items-center">
            <Link
              to="/edit"
              className="bg-[#974FD0] rounded-lg flex gap-2 items-center  py-1 px-2 md:py-2 md:px-3 text-white"
            >
              <img src={edit} alt="" className="w-full object-cover" />
              Edit
            </Link>
            <button className=" text-[#974FD0] cursor-pointer border border-[#974FD0] rounded-lg flex gap-2 items-center  py-1 px-2 md:py-2 md:px-3 ">
              <img src={delet} alt="" className="w-full object-cover" />
              Delete
            </button>
          </div>
        </div>
        <div>
          <h1 className="text-xl md:text-4xl  ">FinTech Website Update</h1>
          <p className="text-lg md:text-[22px] text-[#737171] mt-2 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis
            nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam
            faucibus et magna. Interdum eu tempus ultricies cras neque mi. Eget
            tellus suspendisse et viverra.
          </p>
        </div>
      </div>

      <div className="w-full border border-[#B8B6B6] rounded-[10px] p-4 ">
        <div className="flex justify-between border-b border-[#B8B6B6] mb-3 py-3  ">
          <h1 className="text-[20px] md:text-[24px] text-[#F38383]">Urgent</h1>
          <div className="flex gap-4 items-center">
            <Link
              to="/edit"
              className="bg-[#974FD0] rounded-lg flex gap-2 items-center  py-1 px-2 md:py-2 md:px-3 text-white"
            >
              <img src={edit} alt="" className="w-full object-cover" />
              Edit
            </Link>
            <button className=" text-[#974FD0] cursor-pointer border border-[#974FD0] rounded-lg flex gap-2 items-center  py-1 px-2 md:py-2 md:px-3 ">
              <img src={delet} alt="" className="w-full object-cover" />
              Delete
            </button>
          </div>
        </div>
        <div>
          <h1 className="text-xl md:text-4xl  ">FinTech Website Update</h1>
          <p className="text-lg md:text-[22px] text-[#737171] mt-2 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis
            nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam
            faucibus et magna. Interdum eu tempus ultricies cras neque mi. Eget
            tellus suspendisse et viverra.
          </p>
        </div>
      </div>
    </main>
  );
};

export default MyTaskCard;
