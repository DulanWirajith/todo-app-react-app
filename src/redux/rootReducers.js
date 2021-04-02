import { combineReducers } from "redux";
import todoReducer from "./todo/todoReducer";
// to add all reducers
export const rootReducer = combineReducers({
  todo: todoReducer,
});
