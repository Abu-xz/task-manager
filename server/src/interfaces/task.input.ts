

export interface TaskInput {
  title: string;
  description?: string;
  priority: "low" | "medium" | "high";
  dueDate?: string;
  // status: "pending" | "inprogress" | "done";
  // completed: boolean;
}