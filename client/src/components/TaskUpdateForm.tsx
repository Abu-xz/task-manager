import type React from "react";
import { useEffect, useState } from "react";
import type { TaskData } from "../interfaces/TaskData";
import { toDateTimeLocal } from "../Helper/FormDateTime";
import axios from "axios";
import { toast } from "react-toastify";
import { CircleX } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { openUpdateForm, updateTask } from "../features/tasks/taskSlice";
import type { Task } from "../interfaces/Task";

interface updateFormProp {
  task: Task;
  updateDropDownStatus: () => void;
}

const TaskUpdateForm: React.FC<updateFormProp> = ({
  task,
  updateDropDownStatus,
}) => {
  const dispatch = useAppDispatch();
  const isUpdateFormOpen = useAppSelector(
    (state) => state.tasks.isUpdateFormOpen
  );

  useEffect(() => {
    const { title, description, priority, dueDate } = task;
    console.log(dueDate);

    setFormData({
      title,
      description,
      priority,
      dueDate: dueDate ? toDateTimeLocal(new Date(dueDate)) : "",
    });
  }, [task]);

  const [formData, setFormData] = useState<TaskData>({
    title: "",
    description: "",
    priority: "low",
    dueDate: "",
  });

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      title: event.target.value,
    }));
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      description: e.target.value,
    }));
  };

  const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      priority: e.target.value as "low" | "medium" | "high",
    }));
  };

  const handleDueDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const utcDate = new Date(e.target.value);
    const localInputValue = toDateTimeLocal(utcDate);

    setFormData((prev) => ({
      ...prev,
      dueDate: localInputValue,
    }));
  };

  const handleSubmit = async () => {
    // console.log("form data: ", formData);
    const { title } = formData;
    if (!title) {
      toast.error("Please enter task title!");
      return;
    }
    const dataToSubmit = { ...task, ...formData };
    try {
      const res = await axios.put(`/api/task/${task._id}`, dataToSubmit);
      console.log("response: ", res.data);

      console.log(dataToSubmit);
      dispatch(updateTask(dataToSubmit));
      toast.success("Task updated successfully!");
    } catch (error) {
      console.log("error ", error);
      toast.error("Failed to update task!");
    } finally {
      dispatch(openUpdateForm(!isUpdateFormOpen));
      updateDropDownStatus();
      setFormData({
        title: "",
        description: "",
        priority: "low",
        dueDate: "",
      });
    }
  };

  return (
    // container
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      {/* Form wrapper */}
      <form className="bg-white w-full max-w-md mx-auto p-5 rounded-xl shadow-lg flex flex-col gap-5 overflow-y-auto transition-transform ease-in-out duration-300 scale-100">
        <div className="mb-5">
          <div className="flex justify-between text-center">
            <h1 className="text-xl font-semibold uppercase">Update Task</h1>
            <button
              type="button"
              className="text-xl font-bold text-red-500 cursor-pointer transition"
              onClick={() => {
                dispatch(openUpdateForm(!isUpdateFormOpen));
                updateDropDownStatus();
              }}
            >
              <CircleX />
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold">Title</label>
          <input
            type="text"
            className="p-2 w-full border-2  border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-none"
            placeholder="Enter task title"
            value={formData.title}
            onChange={handleTitleChange}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold">
            Description (optional)
          </label>
          <textarea
            className="p-2 w-full border-2  border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-none"
            placeholder="Enter task description"
            value={formData.description}
            onChange={handleDescriptionChange}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold ">Priority</label>
          <select
            className="p-2 w-full border-2  border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-none"
            value={formData.priority}
            onChange={handlePriorityChange}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold">
            Due Date (optional)
          </label>
          <input
            type="datetime-local"
            className="p-2 w-full border-2  border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-none"
            value={formData.dueDate}
            onChange={handleDueDateChange}
          />
        </div>

        {/* Cancel button */}
        <div className="flex justify-end gap-5">
          <button
            type="button"
            className="border-slate-200 border-2 text-slate-600 px-3 py-1 rounded-md cursor-pointer hover:bg-slate-200 transition"
            onClick={() => {
                dispatch(openUpdateForm(!isUpdateFormOpen));
                updateDropDownStatus();
              }}
          >
            Cancel
          </button>

          {/* Create Task button */}
          <button
            type="button"
            className="bg-violet-400 text-white px-3 py-1 rounded-md cursor-pointer hover:bg-violet-500 transition"
            onClick={handleSubmit}
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskUpdateForm;
