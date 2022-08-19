import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { PokemonResult } from "../models/PokemonResult";
import instance from "../../services/api";
import { Pokemon } from "../models/Pokemon";
import { isEqual } from "../utils/functions/arrayFunctions";
import Cell from "../components/Cell";

const limit = 20;
let count = 0;

const PokemonListScreen = () => {
  const [pokemons, setPokemons] = useState<PokemonResult[]>([]);
  const [offset, setOffset] = useState<number>(0);

  const updateOffset = () => {
    if (offset < count) {
      setOffset((oldValue) => limit + oldValue);
    }
  };

  const getPokemon = () => {
    instance
      .get<Pokemon>(`pokemon?limit=${limit}&offset=${offset}`)
      .then((response) => {
        const result = response.data.results;

        if (count === 0) {
          count = response.data.count;
        }

        if (!isEqual(pokemons, result)) {
          setPokemons((oldValue: PokemonResult[]) => [...oldValue, ...result]);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getPokemon();
  }, [offset]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.list}
        data={pokemons}
        renderItem={({ item }) => <Cell title={item.name} />}
        onEndReached={() => updateOffset()}
      />
    </SafeAreaView>
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
