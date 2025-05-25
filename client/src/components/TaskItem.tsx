import { Check, EllipsisVertical } from "lucide-react";
import type { Task } from "../interfaces/Task";
import { capitalize } from "../Helper/Capitalize";
import type React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useAppDispatch } from "../store/hooks";
import { updateTaskStatus } from "../features/tasks/taskSlice";
import { useState } from "react";
import OptionDropDown from "../components/ui/OptionDropDown";

type TaskItemProp = {
  task: Task;
};

const TaskItem: React.FC<TaskItemProp> = ({ task }) => {

  const dispatch = useAppDispatch();
  const [openOptions, setOpenOptions] = useState(false);

  const toggleCompletedStatus = async (taskId: string, completed: boolean) => {
    try {
      const res = await axios.patch(
        `/api/task/${taskId}/toggle-update-status`,
        { completed }
      );
      console.log("updated task", res.data);
      dispatch(updateTaskStatus(res.data.updated));
      toast.success(res.data?.message);
    } catch (error) {
      console.log("error: ", error);
      toast.error("Failed to update task");
    }
  };

  const toggleStatusChange = async (
    e: React.ChangeEvent<HTMLSelectElement>,
    taskId: string
  ) => {
    const newStatus = e.target.value;
    console.log(newStatus);
    try {
      const res = await axios.patch(
        `/api/task/${taskId}/toggle-update-status`,
        { status: newStatus }
      );
      dispatch(updateTaskStatus(res.data.updated));
      toast.success(res.data?.message);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || "Something went wrong!");
        console.log("Axios error:", error.response?.data);
      } else {
        toast.error("An unexpected error occurred.");
        console.log("Unexpected error:", error);
      }
    }
  };

  return (
    <div className="bg-white rounded-md p-4 min-h-28 shadow-md space-y-2">
      <div className="flex justify-between ">
        <div className="flex space-x-3 items-center">
          <button
            className={`w-6 h-6 rounded-full border-2 border-gray-400 cursor-pointer flex items-center justify-center 
                  ${task.completed ? "bg-violet-400" : ""}`}
            onClick={() => toggleCompletedStatus(task._id, !task.completed)}
          >
            {task.completed && <Check size={14}></Check>}
          </button>
          <h1 className="font-semibold text-md">{task.title}</h1>
        </div>
        <div className="flex gap-2 relative items-center">
          <button
            className={`px-2 rounded-full text-xs font-medium max-h-6 ${
              task.priority === "low"
                ? "bg-cyan-200 text-cyan-700"
                : task.priority === "medium"
                ? "bg-yellow-200 text-amber-700"
                : "bg-red-200 text-red-700"
            }`}
          >
            {capitalize(task.priority)}
          </button>
          <div className="relative">

          <button 
            className="cursor-pointer p-1"
            onClick={() => setOpenOptions(!openOptions)}
            aria-label="More options"
          >
            <EllipsisVertical className="w-4 h-4" />
          </button>
          {openOptions && 
          <div className="absolute z-10 right-0 ">
            <OptionDropDown task={task}  updateDropDownStatus={() => setOpenOptions(!openOptions)}/>
          </div>
           }
          </div>
        </div>
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
          value={task.status}
          onChange={(e) => toggleStatusChange(e, task._id)}
        >
          <option className="bg-green-300 text-green-700" value="todo">
            To Do
          </option>
          <option className="bg-orange-200 text-orange-600" value="inprogress">
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
