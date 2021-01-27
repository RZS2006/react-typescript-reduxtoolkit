import { combineReducers } from "redux";
import todosReducer from "./todosSlice";
import filtersReducer from "./filtersSlice";

export const rootReducer = combineReducers({
  todos: todosReducer,
  filter: filtersReducer
});

export type RootState = ReturnType<typeof rootReducer>;
