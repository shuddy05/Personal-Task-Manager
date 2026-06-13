import React from "react";
import arrowBack from "../assets/Vector.png";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const taskSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  tags: yup.string().required("Tags are required"),
});

const NewTask = () => {
  const BASE_URL = "https://personal-task-manager-mlqm.onrender.com";
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(taskSchema) });

  const handleCrateTask = async (taskData) => {
    try {
      const res = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(taskData),
      });
      navigate("/my-task");
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  return (
    <div>
      <div className="layout">
        <div className="flex items-center gap-5 mb-10">
          <Link to="/my-task">
            <img src={arrowBack} alt="" />
          </Link>
          <h1 className="text-[30px] md:text-[50px] ">New Task</h1>
        </div>
        <form
          onSubmit={handleSubmit(handleCrateTask)}
          className="flex flex-col gap-10"
        >
          <div className="relative">
            <label className="text-[#9C9C9C] text-lg md:text-2xl absolute left-10 top-[-15px] bg-white ">
              Task Title
            </label>
            <input
              type="text"
              {...register("title")}
              placeholder="E.g Project Defense, Assignment ...
              "
              className="w-full h-[84px] p-5 border border-[#B8B6B6] outline-none rounded-md "
            />
            <small className="text-red-600">{errors.title?.message}</small>
          </div>
          <div className="relative">
            <label className="text-[#9C9C9C] text-lg md:text-2xl absolute left-10 top-[-15px] bg-white ">
              Description
            </label>
            <textarea
              type="text"
              {...register("description")}
              placeholder="Briefly describe your task"
              className="w-full h-[230px] p-5 border border-[#B8B6B6] outline-none rounded-md "
            />
            <small className="text-red-600">
              {errors.description?.message}
            </small>
          </div>
          <div className="relative">
            <label className="text-[#9C9C9C] text-lg md:text-2xl absolute left-10 top-[-15px] bg-white ">
              Tags
            </label>
            <select
              {...register("tags")}
              className="w-full text-[#9C9C9C]  p-5 border border-[#B8B6B6] outline-none rounded-md"
            >
              <option>Urgent</option>
              <option>Important</option>
            </select>
            <small className="text-red-600">{errors.tags?.message}</small>
          </div>
          <button className="w-full bg-[#974FD0] text-white py-3 px-5 rounded-lg mb-4 cursor-pointer text-[18px] ">
            Done
          </button>
        </form>
        <h1 className="text-[#974FD0] cursor-pointer text-center hover:underline hover:underline-[#974FD0] ">
          Back To Top
        </h1>
      </div>
    </div>
  );
};

export default NewTask;
