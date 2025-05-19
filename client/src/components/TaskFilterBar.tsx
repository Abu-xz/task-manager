import React from "react";

type TaskFilterProp = {
  handleFilter: (s: string) => void;
};

const TaskFilterBar: React.FC<TaskFilterProp> = ({ handleFilter }) => {
  return (
    <div className="my-5 py-3 w-full ">
      <div className="space-y-3 ">
        <h1 className="font-semibold text-xl">Recent Tasks</h1>
        <div className="flex gap-3 flex-wrap">
          <button
            className="py-1 px-4 rounded-4xl bg-violet-400 cursor-pointer text-white"
            onClick={() => handleFilter("all")}
          >
            All
          </button>
          <button
            className="py-1 px-4 rounded-4xl bg-gray-300 cursor-pointer text-gray-600"
            onClick={() => handleFilter("todo")}
          >
            Todo
          </button>
          <button className="py-1 px-4 rounded-4xl bg-orange-200 cursor-pointer text-orange-600"
            onClick={() => handleFilter("inprogress")}>
            In Progress
          </button>
          <button className="py-1 px-4 rounded-4xl bg-green-300 cursor-pointer text-green-700"
            onClick={() => handleFilter("done")}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskFilterBar;
