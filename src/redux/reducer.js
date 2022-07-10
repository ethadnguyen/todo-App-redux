import { combineReducers } from "redux";
import filtersReducer from "../components/Filters/FiltersSlice";
import todoReducer from "../components/TodoList/TodoSlice";

// split reducer
// const rootReducer = (state = {}, action) => {
//   return {
//     filters: filtersReducer(state.filters, action),
//     todoList: todoReducer(state.todoList, action),
//   };
// };
const rootReducer = combineReducers({
  filters: filtersReducer,
  todoList: todoReducer,
});
export default rootReducer;
