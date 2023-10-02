import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TodoDetails = ({ route }) => {
  const { title, description } = route.params;

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
        <Text style={styles.text}>Title: {title}</Text>
        <Text style={styles.text}>Description: {description}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    width: 300,
    height: 50,
    backgroundColor: "#70AFCE",
    marginVertical: 20,
    shadowRadius: 5,
    textAlign: "center",
    paddingTop: 10,
    borderRadius: 5,
  },
});
export default TodoDetails;
