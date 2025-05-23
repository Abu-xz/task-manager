import { useState } from "react";
import Header from "../components/Header";
import StatsCard from "../components/StatsCard";
import TaskCard from "../components/TaskCard";
import TaskFilterBar from "../components/TaskFilterBar";
import TaskForm from "../components/TaskForm";

const Index = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [taskFilter, setTaskFilter] = useState("all");

  const handleFilterButton = (type: string) => {
    switch (type) {
      case "all":
        setTaskFilter("all");
        break;
      case "todo":
        setTaskFilter("todo");
        break;
      case "inprogress":
        setTaskFilter("inprogress");
        break;
      case "done":
        setTaskFilter("done");
        break;
      default:
        setTaskFilter("all");
    }
  };

  return (
    <>
      {/* Header */}
      <Header openModal={() => setIsOpen((prev) => !prev)} />

      {/* Form Modal */}
      {isOpen && <TaskForm closeModal={() => setIsOpen((prev) => !prev)} />}

      <main className="px-10 py-8 bg-gray-100 min-h-screen space-y-10">
        {/* Task Overview cards */}
        <StatsCard />

        {/* Filter Bar */}
        <TaskFilterBar handleFilter={handleFilterButton} />

        {/* Task List */}

        <TaskCard taskFilter={taskFilter} />
      </main>
      <footer className="bg-purple-700 text-white py-6">
        <div className="flex justify-center items-center">
          <p className="text-sm">
            &copy; 2025 Task Manager. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Index;
