import { createSlice } from "@reduxjs/toolkit";

export interface TodoItemInterface {
  description: string;
  completed: boolean;
  id: string;
}

const initialState: TodoItemInterface[] = [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const { description, id } = action.payload;
      state.push({ description, completed: false, id });
    },
    toggleTodo: (state, action) => {
      const { id } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      const { id } = action.payload;
      return state.filter((todo) => todo.id !== id);
    },
    deleteAllTodos: (state) => {
      return (state = []);
    },
    deleteCompletedTodos: (state) => {
      return state.filter((todo) => !todo.completed);
    }
  }
});

export const {
  addTodo,
  toggleTodo,
  deleteTodo,
  deleteAllTodos,
  deleteCompletedTodos
} = todosSlice.actions;

export default todosSlice.reducer;
