import axios from "axios";
import { useEffect, useState } from "react";
import type { Task } from "../interfaces/Task";

const TaskCard = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get<Task[]>("/api/task");
        console.log(response);
        setTasks(response.data);
      } catch (error) {
        console.log("error", error);
      }finally{
        setIsLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const handleClick = () => {};

  if(isLoading) return <h1>Loading...</h1>

  return tasks.map((task) => (
    <div
      key={task._id}
      className="bg-white rounded-md p-4 w-full sm:w-96 min-h-28 shadow-md space-y-2"
    >
      <div className="flex justify-between ">
        <div className="flex space-x-3 items-center">
          <button
            className="w-5 h-5 rounded-full border-2 border-gray-400 bg-purple-300 cursor-pointer"
            onClick={handleClick}
          ></button>
          <h1 className="font-semibold text-lg">{task.title}</h1>
        </div>
        <button className={`py-1 px-3 rounded-full text-sm font-medium ${
            task.priority === 'low'?
            'bg-cyan-200 text-cyan-700':
            task.priority === 'medium'? 
            'bg-yellow-200 text-amber-700' :
            'bg-red-200 text-red-700'
        }`}>
          {task.priority[0].toUpperCase() + task.priority.slice(1)}
        </button>
      </div>
      <p className="text-sm text-gray-500">{task.description || ""}</p>
      <div className="flex justify-between items-center">
        <span className="italic text-sm text-gray-600">
          {new Date(task.dueDate).toLocaleDateString("en-us", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
             minute: "2-digit", 
          })}
        </span>
        <select
          className="bg-gray-200 text-gray-600 p-1 rounded cursor-pointer "
          defaultValue={task.status}
        >
          <option value="done">Done</option>
          <option value="in progress">In Progress</option>
          <option value="todo">To Do</option>
        </select>
      </div>
    </div>
  ));
};

export default TaskCard;
