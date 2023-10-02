import { View, Text } from "react-native";

import Todo from "./Todo";
import React from "react";
import { useSelector } from "react-redux";

const TodoList = () => {
  const { todos } = useSelector((state) => state.todo);
  return (
    <View>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </View>
  );
};

export default TodoList;
