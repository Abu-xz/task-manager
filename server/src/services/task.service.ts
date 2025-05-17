import { TaskRepository } from "../repositories/task.repository.js";

export class TaskService {
  constructor(private readonly taskRepository = new TaskRepository()) {}

  getTasks() {
    const tasks = this.taskRepository.findAll();
    const mediumTask = tasks?.filter(task => task.priority === 'medium');

    return mediumTask;
  }
}
