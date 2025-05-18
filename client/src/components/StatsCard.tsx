const StatsCard = () => {
  return (
    <div className="flex flex-wrap gap-5">
      <div className="bg-white rounded-md p-4 w-full sm:w-64 flex flex-col gap-5 shadow-sm hover:shadow-lg transition">
        <div className="flex justify-between">
          <h3 className="text-lg font-semibold text-gray-400">Total Task</h3>
          <span>icon</span>
        </div>
        <span className="text-xl font-bold text-gray-800">10</span>
      </div>
      <div className="bg-white rounded-md p-4 w-full sm:w-64 flex flex-col gap-5 shadow-sm hover:shadow-lg transition">
        <div className="flex justify-between">
          <h3 className="text-lg font-semibold text-gray-400">Completed</h3>
          <span>icon</span>
        </div>
        <span className="text-xl font-bold text-gray-800">5</span>
      </div>
      <div className="bg-white rounded-md p-4 w-full sm:w-64 flex flex-col gap-5 shadow-sm hover:shadow-lg transition">
        <div className="flex justify-between">
          <h3 className="text-lg font-semibold text-gray-400">Pending</h3>
          <span>icon</span>
        </div>
        <span className="text-xl font-bold text-gray-800">5</span>
      </div>
      <div className="bg-white rounded-md p-4 w-full sm:w-64 flex flex-col gap-5 shadow-sm hover:shadow-lg transition">
        <div className="flex justify-between">
          <h3 className="text-lg font-semibold text-gray-400">
            Completion Rate
          </h3>
          <span>icon</span>
        </div>
        <span className="text-xl font-bold text-gray-800">50%</span>
      </div>
    </div>
  );
};

export default StatsCard;
