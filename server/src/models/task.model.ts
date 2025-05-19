import mongoose, { Schema } from "mongoose";
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
       enum: ["todo", "inprogress", "done"],
       default: 'todo',
       required: false
    },
    dueDate: {
      type: String,
       required: false,
       default:new Date().toString()
    },
    completed: {
      type: Boolean,
      default: false,
      required: false
    },
  },
  { timestamps: true }
);

const TaskModel = mongoose.model<ITaskDocument>("tasks", taskSchema);

export default TaskModel;
