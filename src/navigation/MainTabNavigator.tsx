import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import FavoritesScreen from "../screens/FavoritesScreen";
import PokemonListScreen from "../screens/PokemonListScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import PokedexNavigator from "./PokedexNavigator";

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Pokemons"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Pokedex") {
            return <Ionicons name="list" size={size} color={color} />;
          } else {
            if (focused) {
              return <Ionicons name="heart" size={size} color={color} />;
            } else {
              return (
                <Ionicons name="heart-outline" size={size} color={color} />
              );
            }
          }
        },
      })}
    >
      <Tab.Screen component={PokedexNavigator} name="Pokedex" />
      <Tab.Screen component={FavoritesScreen} name="Team" />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
