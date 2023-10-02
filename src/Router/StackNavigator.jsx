import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/Home";
import TodoDetails from "../pages/TodoDetails";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="TodoDetails"
        component={TodoDetails}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
