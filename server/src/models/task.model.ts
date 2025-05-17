import mongoose, { Document, Schema } from "mongoose";
import { ITaskDocument } from "../interfaces/task.document.js";



const taskSchema = new Schema<ITaskDocument>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      required: true,
    },
    status: {
      type: String,
       enum: ["pending", "in progress", "done"],
       default: 'pending',
       required: false
    },
    dueDate: {
      type: Date,
       required: false,
    },
    completed: {
      type: Boolean,
      default: false,
      required: false
    },
  },
  { timestamps: true }
);

const TaskModel = mongoose.model<ITaskDocument>("Task", taskSchema);

export default TaskModel;
