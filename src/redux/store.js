import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "../components/Filters/filtersSlice";
import todoReducer from "../components/TodoList/todoSlice";
const store = configureStore({
  reducer: {
    filters: filtersReducer.reducer,
    todoList: todoReducer.reducer,
  },
});

export default store;
