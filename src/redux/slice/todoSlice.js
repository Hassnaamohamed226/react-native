import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      const { title, description } = action.payload;
      if (title.trim() === "" || description.trim() === "") {
        alert("Error Title and description are required");
        return;
      }
      const existingTodo = state.todos.find(
        (todo) => todo.title === title && todo.description === description
      );

      if (existingTodo) {
        alert("Error Todo already exists");
        return;
      }
      if (title) {
        const singleTodo = {
          id: Date.now(),
          done: false,
          title,
          description,
        };
        const allTodos = [...state.todos, singleTodo];
        state.todos = [...allTodos];
      }
    },
    deleteTodo: (state, action) => {
      const { id } = action.payload;

      state.todos = state.todos.filter((todo) => +todo.id !== +id);
      AsyncStorage.setItem("todos", JSON.stringify(state.todos));
    },
    changeTodoStatus: (state, action) => {
      const { id } = action.payload;
      const todo = state.todos.find((res) => res.id === id);
      if (todo) todo.done = !todo.done;
    },
  },
});

export const { addTodo, deleteTodo, changeTodoStatus } = todoSlice.actions;
export default todoSlice;
