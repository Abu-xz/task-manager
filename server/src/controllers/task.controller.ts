import { Request, Response } from "express";
import { TaskService } from "../services/task.service.js";
import { ITaskDocument } from "../interfaces/task.document.js";

export class TaskController {
  constructor(private taskService: TaskService) {}

  getAllTasks = async (req: Request, res: Response) => {
    const tasks = await this.taskService.getTasks();
    res.status(200).json(tasks);
  };

  addNewTask = async (req: Request, res: Response) => {
    const updatedTask: ITaskDocument = await this.taskService.addTask(req.body);
    if (updatedTask) {
      res.status(201).json({ message: "task created", task: updatedTask });
    }
  };

  toggleUpdateStatus = async (req: Request, res: Response) => {
    const { taskId } = req.params;
    const { status, completed } = req.body;

    try {
      const updated = await this.taskService.toggleUpdateTaskStatus(taskId, {
        status,
        completed,
      });
      res.json({ message: "Status updated successfully!", updated });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Failed to update status", error: error });
    }
  };

  updateTask = async (req: Request, res: Response) => {
    const { taskId } = req.params;
    const updatedTask = await this.taskService.updateTask(taskId, req.body);

    if(updatedTask){
      res.status(200).json({message: 'Task updated successfully!', updatedTask});
    }else{
      res.status(500).json({ message: 'Failed to update task' });
    }
  };

  removeTask = async (req: Request, res: Response) => {
    const {taskId} = req.params;
    const deleted = await this.taskService.removeTask(taskId);
    
    if(deleted){
      res.status(203).json({message: 'Task removed successfully!'});
    }else{
      res.status(500).json({message: 'Failed to remove task!'});
    }


  }
}
