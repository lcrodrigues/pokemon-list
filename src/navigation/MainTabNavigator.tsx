import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import FavoritesScreen from "../screens/FavoritesScreen";
import PokemonListScreen from "../screens/PokemonListScreen";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Pokemons"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Pokemons") {
            return <Ionicons name="list" size={size} color={color} />;
          } else {
            return <Ionicons name="heart" size={size} color={color} />;
          }
        },
      })}
    >
      <Tab.Screen component={PokemonListScreen} name="Pokemons" />
      <Tab.Screen component={FavoritesScreen} name="Favorites" />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
