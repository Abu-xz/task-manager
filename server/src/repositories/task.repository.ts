import { ITaskDocument } from "../interfaces/task.document.js";
import { TaskInput } from "../interfaces/task.input.js";
import TaskModel from "../models/task.model.js";

export class TaskRepository {
  async findAll(): Promise<ITaskDocument[]> {
    return TaskModel.find();
  }

  async create(task: TaskInput): Promise<ITaskDocument> {
    const newTask = new TaskModel(task);
    return newTask.save();
  }

  async updateTaskStatusAndCompletion(
    taskId: string,
    update: { status?: TaskInput["status"]; completed?: boolean }
  ): Promise<ITaskDocument | null> {

    const updates: Pick<TaskInput, "status" | "completed"> = {};

    if (update.status) {
      updates.status = update.status;
      if (update.status === "done") {
        updates.completed = true;
      } else if (update.status === "todo" || update.status === "inprogress") {
        updates.completed = false;
      }
    }

    if (typeof update.completed === "boolean" && !update.status) {
      updates.completed = update.completed;
      updates.status = update.completed ? "done" : "todo";
    }

    return TaskModel.findByIdAndUpdate(taskId, updates, { new: true });
  }

  async updateTask(taskId: string, task: TaskInput): Promise<ITaskDocument | null> {
    return TaskModel.findByIdAndUpdate(taskId, task, {new: true});
  }
}
