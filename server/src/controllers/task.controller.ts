import { Request, Response } from "express";
import { TaskService } from "../services/task.service.js";
import { ITaskDocument } from "../interfaces/task.document.js";

const taskService = new TaskService();

export const getAllTasks = async (req: Request, res: Response) => {
  const tasks = await taskService.getTasks();
  res.status(200).json(tasks);
};

export const addNewTask = async (req: Request, res: Response) => {
  const updatedTask: ITaskDocument = await taskService.addTask(req.body);
  if (updatedTask) {
    res.status(201).json({ message: "task created", task: updatedTask });
  }
};

export const updateTaskCompleted = async (req: Request, res: Response) => {
  const { taskId } = req.params;
  const { completed } = req.body;
  try {

    const updatedTask = await taskService.toggleCompletedTask(taskId, completed);
    res.status(200).json({message: 'Task completed status updated', updatedTask});

  } catch (error) {
    res.status(500).json({message: 'Failed to update task status', error: error})
  }

};
