import { Document } from "mongoose";

export interface ITaskDocument extends Document {
  title: string;
  description?: string;
  priority: "low" | "medium" | "high";
  status: "pending" | "inprogress" | "done";
  dueDate?: Date;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}
