import axios from "axios";
import { useEffect, useState } from "react";
import type { Task } from "../interfaces/Task";
import TaskItem from "./TaskItem";
import { setTasks } from "../features/tasks/taskSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

type TaskCardProp = {
  taskFilter: string;
};

const TaskCard: React.FC<TaskCardProp> = ({ taskFilter }) => {
  const dispatch = useAppDispatch();
  const taskList = useAppSelector((state) => state.tasks.list);

  const [filteredTasks, setFilterTask] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    try {
      const fetchTasks = async () => {
        const res = await axios.get<Task[]>("/api/task");
        dispatch(setTasks(res.data));
        setIsLoading(false)
      };
      
      fetchTasks();
      
    } catch (error) {
      setIsLoading(true)
      console.log('Failed to fetch task', error)
    }

  }, [dispatch]);

  useEffect(() => {
    if (taskFilter === "all") {
      setFilterTask(taskList);
    } else {
      setFilterTask(taskList.filter((task) => task.status === taskFilter));
    }
  }, [taskList, taskFilter]);

  if (isLoading) return <h1>Loading data...</h1>;

  return (
    <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
      {filteredTasks.map((task) => (
        <TaskItem key={task._id} task={task} />
      ))}
    </div>
  );
};

export default TaskCard;
