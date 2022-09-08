import React from "react";
import {
  createStackNavigator,
  StackScreenProps,
} from "@react-navigation/stack";
import PokemonListScreen from "../screens/PokemonListScreen";
import DetailsScreen from "../screens/DetailsScreen";
import { PokemonResult } from "../models/PokemonResult";

const Stack = createStackNavigator<PokedexStackParamList>();

const PokedexNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{ headerTitle: "Pokedex" }}
      name="PokemonListScreen"
      component={PokemonListScreen}
    />
    <Stack.Screen
      options={{ headerTitle: "Details" }}
      name="DetailsScreen"
      component={DetailsScreen}
    />
  </Stack.Navigator>
);

export default PokedexNavigator;

type PokedexStackParamList = {
  PokemonListScreen: undefined;
  DetailsScreen: { pokemon: PokemonResult };
};

export type PokedexProps = StackScreenProps<
  PokedexStackParamList,
  "PokemonListScreen"
>;

export type DetailsProps = StackScreenProps<
  PokedexStackParamList,
  "DetailsScreen"
>;
