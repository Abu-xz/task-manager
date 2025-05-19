import { ITaskDocument } from "../interfaces/task.document.js";
import { TaskInput } from "../interfaces/task.input.js";
import TaskModel from "../models/task.model.js";

[
  {
    title: "Finish project documentation",
    description: "Complete the README and setup guides",
    priority: "high",
    status: "in progress",
    dueDate: new Date("2025-05-20"),
    completed: false,
  },
  {
    title: "Fix login bug",
    description: "Users are unable to login with Google OAuth",
    priority: "medium",
    status: "pending",
    dueDate: new Date("2025-05-18"),
    completed: false,
  },
  {
    title: "Team meeting",
    description: "Discuss project milestones and deadlines",
    priority: "low",
    status: "done",
    dueDate: new Date("2025-05-10"),
    completed: true,
  },
  {
    title: "Implement task filtering",
    description: "Add feature to filter tasks by priority and status",
    priority: "medium",
    status: "pending",
    dueDate: new Date("2025-05-25"),
    completed: false,
  },
  {
    title: "Code review",
    description: "Review PRs for the new task manager module",
    priority: "high",
    status: "in progress",
    dueDate: new Date("2025-05-19"),
    completed: false,
  },
];

export class TaskRepository {
  async findAll(): Promise<ITaskDocument[]> {
    return await TaskModel.find();
  }

  async create(task: TaskInput): Promise<ITaskDocument> {
    const newTask = new TaskModel(task);
    return newTask.save();
  }

  async updateCompleteStatus(taskId: string, completed: boolean) {
    return await TaskModel.findByIdAndUpdate(taskId, { completed }, { new: true });
  }
}
