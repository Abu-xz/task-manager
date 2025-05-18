  import { CalendarCheck2, CircleCheckBig, ClipboardList, Clock } from "lucide-react";



  const StatsCard = () => {
    return (
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        <div className="bg-white rounded-md p-4 flex flex-col gap-5 shadow-sm hover:shadow-lg transition">
          <div className="flex justify-between">
            <h3 className="text-lg font-semibold text-gray-400">Total Task</h3>
            <ClipboardList color="#9c74e7"/>
          </div>
          <span className="text-xl font-bold text-gray-800">10</span>
        </div>
        <div className="bg-white rounded-md p-4 flex flex-col gap-5 shadow-sm hover:shadow-lg transition">
          <div className="flex justify-between">
            <h3 className="text-lg font-semibold text-gray-400">Completed</h3>
            <CircleCheckBig color="#9c74e7"/>
          </div>
          <span className="text-xl font-bold text-gray-800">5</span>
        </div>
        <div className="bg-white rounded-md p-4 flex flex-col gap-5 shadow-sm hover:shadow-lg transition">
          <div className="flex justify-between">
            <h3 className="text-lg font-semibold text-gray-400">Pending</h3>
            <Clock color="#9c74e7"/>
          </div>
          <span className="text-xl font-bold text-gray-800">5</span>
        </div>
        <div className="bg-white rounded-md p-4 flex flex-col gap-5 shadow-sm hover:shadow-lg transition">
          <div className="flex justify-between">
            <h3 className="text-lg font-semibold text-gray-400">
              Completion Rate
            </h3>
            <CalendarCheck2 color="#9c74e7"/>
          </div>
          <span className="text-xl font-bold text-gray-800">50%</span>
        </div>
      </div>
    );
  };

  export default StatsCard;
