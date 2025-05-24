import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type Task } from "../../interfaces/Task";

interface TaskState {
  list: Task[];
  isUpdateFormOpen: boolean;
}

const initialState: TaskState = {
  list: [],
  isUpdateFormOpen: false,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<Task[]>) => {
      state.list = action.payload;
    },
    addTask: (state, action: PayloadAction<Task>) => {
      state.list.push(action.payload);
    },
    updateTaskStatus: (state, action: PayloadAction<Task>) => {
      const index = state.list.findIndex(
        (task) => task._id === action.payload._id
      );
      console.log("action payload", action.payload);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((task) => task._id !== action.payload);
    },
    openUpdateForm: (state, action: PayloadAction<boolean>) => {
      state.isUpdateFormOpen = action.payload;
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      state.list = state.list.map((task) => task._id === action.payload._id ? action.payload : task)
    },
  },
});

export const {
  setTasks,
  addTask,
  updateTaskStatus,
  removeTask,
  openUpdateForm,
  updateTask,
} = tasksSlice.actions;
export default tasksSlice.reducer;
