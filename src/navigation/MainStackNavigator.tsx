import React from "react";
import {
  createStackNavigator,
  StackScreenProps,
} from "@react-navigation/stack";
import MainTabNavigator from "../navigation/MainTabNavigator";
import DetailsScreen from "../screens/DetailsScreen";
import { PokemonResult } from "../models/PokemonResult";

const { Navigator, Screen } = createStackNavigator<MainStackParamList>();

const MainStackNavigator = () => {
  return (
    <Navigator>
      <Screen
        options={{ headerShown: false }}
        name="MainTabNavigator"
        component={MainTabNavigator}
      />
      <Screen name="DetailsScreen" component={DetailsScreen} />
    </Navigator>
  );
};

export default MainStackNavigator;

type MainStackParamList = {
  MainTabNavigator: undefined;
  DetailsScreen: { pokemon: PokemonResult };
};

export type MainProps = StackScreenProps<
  MainStackParamList,
  "MainTabNavigator"
>;

export type DetailsProps = StackScreenProps<
  MainStackParamList,
  "DetailsScreen"
>;
