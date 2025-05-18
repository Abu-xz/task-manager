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
