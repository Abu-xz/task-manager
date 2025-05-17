import { Request, Response } from "express";
import { TaskService } from "../services/task.service.js";

const taskService = new TaskService()

export const getAllTasks = (req: Request, res: Response) => {
    const tasks = taskService.getTasks();
    res.status(200).json(tasks);
};
