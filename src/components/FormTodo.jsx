import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";

const FormTodo = ({ onChangetitle, onChangedescription, addTodo }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 50,
        backgroundColor: "#70AFCE",
        borderWidth: 1,
        borderColor: "#70AFCE",
        borderRadius: 5,
        marginBottom: 50,
        shadowRadius: 5,
        width: 400,
      }}
    >
      <Text style={styles.title}>Todo App</Text>
      <TextInput
        onChangeText={onChangetitle}
        style={styles.input}
        placeholder="Enter Your Todo Name"
      />
      <TextInput
        onChangeText={onChangedescription}
        style={styles.input}
        placeholder="Enter Your Todo Description"
      />
      <TouchableOpacity style={styles.button} onPress={addTodo}>
        <Text style={{ color: "#fff", fontSize: 20 }}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontWeight: "500",
    fontSize: 25,
    marginBottom: 15,
    color: "#3A7B99",
    textShadowRadius: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#3A7B99",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    width: 300,
    shadowRadius: 5,
  },
  button: {
    padding: 5,
    ...Platform.select({
      android: {
        backgroundColor: "green",
      },
      ios: {
        backgroundColor: "red",
      },
      default: {
        // other platforms, web for example
        backgroundColor: "#3A7B99",
      },
    }),
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    paddingHorizontal: 40,
    shadowRadius: 5,
  },
});

export default FormTodo;
