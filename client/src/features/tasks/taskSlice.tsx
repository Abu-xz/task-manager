import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type Task } from "../../interfaces/Task";

interface TaskState {
  list: Task[];
}

const initialState: TaskState = {
  list: [],
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
    updateTask: (state, action: PayloadAction<Task>) => {
      const index = state.list.findIndex(
        (task) => task._id === action.payload._id
      );
      console.log('action payload', action.payload)
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((task) => task._id !== action.payload);
    },
  },
});

export const { setTasks, addTask, updateTask, removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;
