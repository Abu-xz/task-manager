

export interface TaskInput {
  title: string;
  description?: string;
  priority: "low" | "medium" | "high";
  status: "pending" | "in progress" | "done";
  dueDate?: Date;
  completed: boolean;
}