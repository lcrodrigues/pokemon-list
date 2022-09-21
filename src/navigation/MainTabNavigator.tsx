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
      <Tab.Screen component={PokemonListScreen} name="Pokedex" />
      <Tab.Screen component={FavoritesScreen} name="Team" />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
