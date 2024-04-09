import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./todosSlice.js";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer
  }
});