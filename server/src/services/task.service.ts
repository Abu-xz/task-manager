import { TaskInput } from "../interfaces/task.input.js";
import { TaskRepository } from "../repositories/task.repository.js";

export class TaskService {
  constructor(private readonly taskRepository = new TaskRepository()) {}

 async getTasks() {
    return this.taskRepository.findAll();
  }

  async addTask(task: TaskInput) {
    // business logic here - validation , filtering like that 
    return this.taskRepository.create(task);
  }
}
