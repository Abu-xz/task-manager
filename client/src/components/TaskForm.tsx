import type React from "react";
// import { TaskData } from "../interfaces/TaskData";


interface TaskFormProp {
  closeModal: () => void
}

const TaskForm: React.FC<TaskFormProp> = ({ closeModal }) => {
  return (
    // container
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      {/* Form wrapper */}
      <form className="bg-white w-full max-w-md mx-auto p-5 rounded-xl shadow-lg flex flex-col gap-5 overflow-y-auto transition-transform ease-in-out duration-300 scale-100">
        <div className="mb-5">
          <div className="flex justify-between text-center">
            <h1 className="text-xl font-semibold">Create New Task</h1>
            <button
              type="button"
              className="text-xl font-bold text-red-500 cursor-pointer hover:scale-120 transition"
              onClick={closeModal}
            >
              x
            </button>
          </div>
          <h2 className="text-gray-400 font-medium text-sm">
            Fill in the details for your new task
          </h2>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold">Title</label>
          <input
            type="text"
            className="p-3 w-full border-2  border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-none"
            placeholder="Enter task title"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold">
            Description (optional)
          </label>
          <textarea
            className="p-3 w-full border-2  border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-none"
            placeholder="Enter task description"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold ">Priority</label>
          <select className="p-3 w-full border-2  border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-none">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        {/* Future update to Add Calender and Time using date-fns*/}

        <div className="flex justify-end gap-5">
          <button
            type="button"
            className="border-slate-200 border-2 text-slate-600 px-3 py-1 rounded-md cursor-pointer hover:bg-slate-200 transition"
          >
            Cancel
          </button>
          <button
            type="button"
            className="bg-violet-400 text-white px-3 py-1 rounded-md cursor-pointer hover:bg-violet-500 transition"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
