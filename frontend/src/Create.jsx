/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Delete, Edit } from "lucide-react";

export const Create = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [taskIdToEdit, setTaskIdToEdit] = useState("");
  const [updatedTask, setUpdatedTask] = useState("");

  const createTaskHandler = async () => {
    try {
      const res = await axios.post("http://localhost:4000/api/v1/task/create", {
        title: task.trim(),
      });
      console.log(res.data);
      setTask("");
      fetchTaskHandler();
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTaskHandler = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/v1/task/get");
      setTasks(res.data.tasks);
    } catch (error) {
      console.log(error);
    }
  };

  const editTaskHandler = async (id) => {
    try {
      const res = await axios.put(
        `http://localhost:4000/api/v1/task/update/${id}`,
        { title: updatedTask }
      );
      console.log(res.data);
      setTaskIdToEdit("");
      setUpdatedTask("");
      fetchTaskHandler();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTaskHandler = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:4000/api/v1/task/delete/${id}`
      );
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTaskHandler();
  }, []);

  return (
    <div className="flex items-center justify-center mt-10">
      <div className="">
        <h1 className="font-bold text-3xl items-center justify-center">
          To-Do List
        </h1>
        <input
          type="text"
          className="mt-6 w-72 gap-4"
          placeholder="Enter your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={createTaskHandler}>Add</button>
        <ul className="mt-8">
          {tasks.map((task) => (
            <li
              key={task._id}
              className="flex text-2xl p-2 border border-gray-300 "
            >
              {taskIdToEdit === task._id ? (
                <>
                  <input
                    type="text"
                    value={updatedTask}
                    placeholder="update your task"
                    onChange={(e) => setUpdatedTask(e.target.value)}
                  />
                  <button onClick={() => editTaskHandler(task._id)}>
                    Save
                  </button>
                  <button
                    onClick={() => {
                      setTaskIdToEdit("");
                      setUpdatedTask("");
                    }}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <span> {task.title} </span>
                  <button
                    className="ml-auto "
                    onClick={() => {
                      setTaskIdToEdit(task._id);
                      setUpdatedTask(task.title);
                    }}
                  >
                    <Edit />
                  </button>
                  <button
                    onClick={() => {
                      setUpdatedTask("");
                      setTaskIdToEdit("");
                      deleteTaskHandler(task._id);
                    }}
                  >
                    <Delete />
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
