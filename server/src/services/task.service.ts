import { ITaskDocument } from "../interfaces/task.document.js";
import { TaskInput } from "../interfaces/task.input.js";
import { TaskRepository } from "../repositories/task.repository.js";

export class TaskService {
  constructor(private taskRepository: TaskRepository) {}

  async getTasks() {
    return this.taskRepository.findAll();
  }

  async addTask(task: TaskInput) {
    console.log("task data logged in service:", task);
    // business logic here like validation , filtering
    return this.taskRepository.create(task);
  }

  async toggleUpdateTaskStatus(
    taskId: string,
    update: { status?: TaskInput["status"]; completed?: boolean }
  ) {
    if (
      update.status &&
      !["todo", "inprogress", "done"].includes(update.status)
    ) {
      const err = new Error("Invalid status value");
      (err as any).statusCode = 400;
      (err as any).message = 'Invalid status value';

      throw err;
    }
    return this.taskRepository.updateTaskStatusAndCompletion(taskId, update);
  }

  async updateTask(taskId: string, task: TaskInput): Promise<ITaskDocument| null> {
    // Add validation like check task id is valid or not etc...
    return this.taskRepository.updateTask(taskId, task)
  }
}

