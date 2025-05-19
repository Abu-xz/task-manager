import { Check } from "lucide-react";
import type { Task } from "../interfaces/Task";
import { capitalize } from "../Helper/Capitalize";
import type React from "react";

type TaskItemProp = {
  task: Task;
};

const TaskItem: React.FC<TaskItemProp> = ({ task }) => {
  return (
    <div className="bg-white rounded-md p-4 min-h-28 shadow-md space-y-2">
      <div className="flex justify-between ">
        <div className="flex space-x-3 items-center ">
        <button
          className={`w-5 h-5 rounded-full border-2 border-gray-400 cursor-pointer flex items-center justify-center 
                  ${task.completed ? "bg-violet-400" : ""}`}
        >
          {task.completed && <Check size={14}></Check>}
        </button>
          <h1 className="font-semibold text-md">{task.title}</h1>
        </div>
        <button
          className={`px-2 rounded-full text-xs font-medium ${
            task.priority === "low"
              ? "bg-cyan-200 text-cyan-700"
              : task.priority === "medium"
              ? "bg-yellow-200 text-amber-700"
              : "bg-red-200 text-red-700"
          }`}
        >
          {capitalize(task.priority)}
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
          <option className="bg-green-300 text-green-700" value="todo">
            To Do
          </option>
          <option className="bg-orange-200 text-orange-600" value="in progress">
            In Progress
          </option>
          <option className="bg-gray-300 text-gray-600" value="done">
            Done
          </option>
        </select>
      </div>
    </div>
  );
};

export default TaskItem;
