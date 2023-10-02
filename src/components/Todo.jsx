import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { changeTodoStatus, deleteTodo } from "../redux/slice/todoSlice";

const Todo = ({ todo }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate("TodoDetails", todo)}
        style={{
          width: 300,
          minHeight: 50,
          padding: 15,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#5093B3",
          marginBottom: 10,
          borderRadius: 5,
          shadowRadius: 5,
        }}
      >
        <Text
          onPress={() => navigation.navigate("TodoDetails", todo)}
          style={{ color: "#fff" }}
        >
          {todo.title}
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <TouchableWithoutFeedback
            onPress={() => dispatch(deleteTodo({ id: todo.id }))}
          >
            <AntDesign name="delete" size={24} color="white" />
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={() => dispatch(changeTodoStatus({ id: todo.id }))}
          >
            <FontAwesome name="check-circle" size={24} color="white" />
          </TouchableWithoutFeedback>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default Todo;
