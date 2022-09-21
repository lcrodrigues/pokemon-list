import { FlatList, StyleSheet, Text } from "react-native";
import React, { useEffect } from "react";
import Cell from "../components/Cell";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemon } from "../store/pokemon/pokemonListSlice";
import { AppDispatch, RootState } from "../store/store";
import { PokemonResult } from "../models/PokemonResult";
import { MainProps } from "../navigation/MainStackNavigator";
import { useNavigation } from "@react-navigation/native";

const PokemonListScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<MainProps["navigation"]>();

  const handleOnEndReached = () => {
    const { loading, offset, pokemon } = screenState;

    if (!loading) {
      if (pokemon.count > 0 && offset < pokemon.count) {
        dispatch(fetchPokemon({ offset: screenState.offset }));
      }
    }
  };

  const navigateToDetails = (pokemon: PokemonResult) => {
    navigation.navigate("DetailsScreen", { pokemon });
  };

  useEffect(() => {
    dispatch(fetchPokemon({ offset: 0 }));
  }, []);

  const screenState = useSelector((state: RootState) => state.pokemonList);
  return (
    <FlatList
      style={styles.list}
      data={screenState.pokemon.results}
      renderItem={({ item, index }) => (
        <Cell
          onPress={() => navigateToDetails(item)}
          index={index}
          pokemon={item}
        />
      )}
      onEndReached={() => handleOnEndReached()}
    />
  );
};

export default PokemonListScreen;

const styles = StyleSheet.create({
  list: {
    margin: 16,
  },
});
