import { Document } from "mongoose";

export interface ITaskDocument extends Document {
  title: string;
  description?: string;
  priority: "low" | "medium" | "high";
  status: "todo" | "inprogress" | "done";
  dueDate?: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}
