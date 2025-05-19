import axios from "axios";
import { useEffect, useState } from "react";
import type { Task } from "../interfaces/Task";
import TaskItem from "./TaskItem";

type TaskCardProp = {
  taskFilter: string
}

const TaskCard: React.FC<TaskCardProp> = ({taskFilter}) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilterTask] = useState<Task[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get<Task[]>("/api/task");
        console.log(response);
        setTasks(response.data);
      } catch (error) {
        console.log("error", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTasks();
  }, []);


  useEffect(() => {
    if(taskFilter === 'all'){
      setFilterTask(tasks);
    }else{
      setFilterTask(tasks.filter(task => task.status === taskFilter))
    }

  }, [tasks, taskFilter])

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
      {filteredTasks.map((task) => (
        <TaskItem key={task._id} task={task}/>
      ))}
    </div>
  );
};

export default TaskCard;
