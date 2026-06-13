import React from "react";
import edit from "../assets/clarity_note-edit-line.png";
import delet from "../assets/fluent_delete-24-regular.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const MyTask = () => {
  const BASE_URL = "https://personal-task-manager-mlqm.onrender.com/api/task";
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch(BASE_URL);
        const data = await res.json();
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);

  const handleDeleteTask = async (id) => {
    try {
      const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete");
      setTasks((prev) => prev.filter((task) => task._id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

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
        <div className="flex flex-col gap-10">
          {loading && (
            <div className="flex flex-col justify-center items-center  min-h-[50vh]">
              <div className="loader"></div>
            </div>
          )}
          {error && <p className="text-center text-red-600">{error}</p>}
          {!loading &&
            !error &&
            tasks.map((task) => {
              return (
                <div
                  key={task._id}
                  className="w-full border border-[#B8B6B6] rounded-[10px] p-4 "
                >
                  <div className="flex justify-between border-b border-[#B8B6B6] mb-3 py-3  ">
                    <h1
                      className={`text-[20px] md:text-[24px] ${task.tags == "Urgent" ? "text-[#F38383]" : "text-[#73C3A6]"} `}
                    >
                      {task.tags}
                    </h1>
                    <div className="flex gap-4 items-center">
                      <Link
                        to={`/edit/${task._id}`}
                        className="bg-[#974FD0] rounded-lg flex gap-2 items-center  py-1 px-2 md:py-2 md:px-3 text-white"
                      >
                        <img
                          src={edit}
                          alt=""
                          className="w-full object-cover"
                        />
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDeleteTask(task._id)}
                        className=" text-[#974FD0] cursor-pointer border border-[#974FD0] rounded-lg flex gap-2 items-center  py-1 px-2 md:py-2 md:px-3 "
                      >
                        <img
                          src={delet}
                          alt=""
                          className="w-full object-cover"
                        />
                        Delete
                      </button>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-xl md:text-4xl  "> {task.title} </h1>
                    <p className="text-lg md:text-[22px] text-[#737171] mt-2 ">
                      {" "}
                      {task.description}{" "}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default MyTask;
