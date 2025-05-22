

export interface TaskInput {
  title: string;
  description?: string;
  priority: "low" | "medium" | "high";
  dueDate: string;
  status?: "todo" | "inprogress" | "done";
  completed?: boolean;
}