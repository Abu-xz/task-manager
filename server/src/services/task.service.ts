import { TaskInput } from "../interfaces/task.input.js";
import { TaskRepository } from "../repositories/task.repository.js";

export class TaskService {
  constructor(private readonly taskRepository = new TaskRepository()) {}

  async getTasks() {
    return this.taskRepository.findAll();
  }

  async addTask(task: TaskInput) {
    console.log("task data logged in service:", task);
    // business logic here - validation , filtering like that
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
}
