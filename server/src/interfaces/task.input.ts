

export interface TaskInput {
  title: string;
  description?: string;
  priority: "low" | "medium" | "high";
  status: "pending" | "inprogress" | "done";
  dueDate?: Date;
  completed: boolean;
}