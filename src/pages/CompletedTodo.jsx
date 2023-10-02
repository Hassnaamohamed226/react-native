import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Todo from "../components/Todo";
const CompletedTodo = () => {
  const [doneTodos, setDoneTodos] = useState([]);
  const { todos } = useSelector((state) => state.todo);

  useEffect(() => {
    if (todos) {
      const filteredTodos = todos.filter((res) => res.done);
      setDoneTodos(filteredTodos);
    }
  }, [todos]);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {doneTodos.length ? (
        <>
          <Text>CompletedTodo</Text>
          {doneTodos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </>
      ) : (
        <Text>No Todos Found!</Text>
      )}
    </View>
  );
};

export default CompletedTodo;
