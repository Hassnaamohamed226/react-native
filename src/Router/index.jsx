import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CompletedTodo from "../pages/CompletedTodo";
import StackNavigator from "./StackNavigator";
import "react-native-gesture-handler";
import NotCompletedTodo from "../pages/NotCompletedTodo";

const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Main"
        screenOptions={{ headerTitle: "Todo App" }}
      >
        <Tab.Screen name="Main" component={StackNavigator} />
        <Tab.Screen name="Completed-todos" component={CompletedTodo} />
        <Tab.Screen name="Not_Completed-todos" component={NotCompletedTodo} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;
