import type React from "react";
import {
  CalendarCheck2,
  CircleCheckBig,
  ClipboardList,
  Clock,
} from "lucide-react";
import { useAppSelector } from "../store/hooks";
import type { Task } from "../interfaces/Task";

const StatsCard: React.FC = () => {
  const taskItems: Task[] = useAppSelector((state) => state.tasks.list);

  const totalTask = taskItems.length;
  const completed = taskItems.filter((task) => task.completed == true).length;
  const pending = totalTask - completed
  const percentage: number = Math.round(
    totalTask === 0 ? 0 : (completed / totalTask) * 100
  );

  return (
    <div className="grid gap-5 grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 ">
      <div className="bg-white rounded-md p-4 flex flex-col gap-5 shadow-sm hover:shadow-lg transition">
        <div className="flex justify-between">
          <h3 className="text-lg font-semibold text-gray-400">Total Task</h3>
          <ClipboardList color="#9c74e7" />
        </div>
        <span className="text-xl font-bold text-gray-800">{totalTask}</span>
      </div>
      <div className="bg-white rounded-md p-4 flex flex-col gap-5 shadow-sm hover:shadow-lg transition">
        <div className="flex justify-between">
          <h3 className="text-lg font-semibold text-gray-400">Completed</h3>
          <CircleCheckBig color="#9c74e7" />
        </div>
        <span className="text-xl font-bold text-gray-800">{completed}</span>
      </div>
      <div className="bg-white rounded-md p-4 flex flex-col gap-5 shadow-sm hover:shadow-lg transition">
        <div className="flex justify-between">
          <h3 className="text-lg font-semibold text-gray-400">Pending</h3>
          <Clock color="#9c74e7" />
        </div>
        <span className="text-xl font-bold text-gray-800">
          {pending}
        </span>
      </div>
      <div className="bg-white rounded-md p-4 flex flex-col gap-5 shadow-sm hover:shadow-lg transition">
        <div className="flex justify-between">
          <h3 className="text-lg font-semibold text-gray-400">
            Completion Rate
          </h3>
          <CalendarCheck2 color="#9c74e7" />
        </div>
        <span className="text-xl font-bold text-gray-800">{percentage}%</span>
      </div>
    </div>
  );
};

export default StatsCard;
