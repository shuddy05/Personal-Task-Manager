import React from "react";
import arrowBack from "../assets/Vector.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const taskSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  tags: yup.string().required("Tags are required"),
});

const EditTask = () => {
  const BASE_URL = "http://localhost:5010/api/task";
  const { id } = useParams();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(taskSchema) });

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const res = await fetch(`${BASE_URL}/${id}`);
        const data = await res.json();
        reset(data);
      } catch (error) {
        console.error("Error fetching task:", error);
      }
    };
    fetchTask();
  }, [id]);

  const handleEditTask = async (updates) => {
    try {
      await fetch(`${BASE_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updates),
      });
      navigate("/my-task");
    } catch (error) {
      console.error("Error updating task:", error);
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
          onSubmit={handleSubmit(handleEditTask)}
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
            <input
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

export default EditTask;
