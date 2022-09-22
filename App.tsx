import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Provider } from "react-redux";
import MainStackNavigator from "./src/navigation/MainStackNavigator";
import store from "./src/store/store";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistStore } from "redux-persist";

let persistor = persistStore(store);

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <MainStackNavigator />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}
