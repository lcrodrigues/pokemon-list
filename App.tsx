import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Provider } from "react-redux";
import MainStackNavigator from "./src/navigation/MainStackNavigator";
import MainTabNavigator from "./src/navigation/MainTabNavigator";
import store from "./src/store/store";

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <MainStackNavigator />
      </Provider>
    </NavigationContainer>
  );
}
