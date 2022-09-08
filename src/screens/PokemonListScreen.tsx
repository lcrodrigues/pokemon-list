import { FlatList, StyleSheet, Text } from "react-native";
import React, { useEffect } from "react";
import Cell from "../components/Cell";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemon } from "../store/pokemon/pokemonListSlice";
import { AppDispatch, RootState } from "../store/store";
import { FilledPokeball } from "../../assets/icons";
import { PokedexProps } from "../navigation/PokedexNavigator";
import { PokemonResult } from "../models/PokemonResult";

const PokemonListScreen = ({ navigation, route }: PokedexProps) => {
  const handleOnEndReached = () => {
    const { loading, offset, pokemon } = screenState;

    if (!loading) {
      if (pokemon.count > 0 && offset < pokemon.count) {
        dispatch(fetchPokemon({ offset: screenState.offset }));
      }
    }
  };

  const dispatch = useDispatch<AppDispatch>();

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
          title={item.name}
        />
      )}
      onEndReached={() => handleOnEndReached()}
    />
  );
};

export default PokemonListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    margin: 16,
  },
});
