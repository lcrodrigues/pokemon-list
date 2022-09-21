import { FlatList, StyleSheet } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { getFavorites } from "../store/pokemon/pokemonListSlice";
import Cell from "../components/Cell";
import { useNavigation } from "@react-navigation/native";
import { MainProps } from "../navigation/MainStackNavigator";
import { PokemonResult } from "../models/PokemonResult";

const FavoritesScreen = () => {
  const navigation = useNavigation<MainProps["navigation"]>();
  const favoriteList = useSelector(getFavorites);

  const navigateToDetails = (pokemon: PokemonResult) => {
    navigation.navigate("DetailsScreen", { pokemon });
  };

  return (
    <FlatList
      style={styles.list}
      data={favoriteList}
      renderItem={({ item, index }) => (
        <Cell
          onPress={() => navigateToDetails(item)}
          index={index}
          pokemon={item}
        />
      )}
    />
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  list: {
    margin: 16,
  },
});
