import React, { useState, useEffect } from "react";
import FormTodo from "../components/FormTodo";
import TodoList from "../components/TodoList";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { addTodo } from "../redux/slice/todoSlice";

const Home = ({}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleAddTodo = async () => {
    const newTodo = { title, description };
    dispatch(addTodo(newTodo));

    try {
      const storedTodos = await AsyncStorage.getItem("todos");
      let parsedTodos = [];
      if (storedTodos) {
        parsedTodos = JSON.parse(storedTodos);
      }
      parsedTodos.push(newTodo);
      await AsyncStorage.setItem("todos", JSON.stringify(parsedTodos));
    } catch (error) {
      console.log("Error storing todos:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    try {
      const data = await AsyncStorage.getItem("todos");
      return data != null ? console.log(data) : null;
    } catch (error) {
      console.log("Error loading data:", error);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 50,
        backgroundColor: "#3A7B99",
      }}
    >
      <FormTodo
        addTodo={handleAddTodo}
        onChangedescription={(value) => setDescription(value)}
        onChangetitle={(value) => setTitle(value)}
      />
      {todos.length !== 0 && (
        <>
          <View style={styles.divider} />
          <TodoList />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  divider: {
    width: "95%",
    height: 1,
    backgroundColor: "#5093B3",
    marginVertical: 20,
    shadowRadius: 5,
  },
});
export default Home;
