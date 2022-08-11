import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text } from "react-native";
import instance from "./services/api";
import Cell from "./src/components/Cell";
import { Pokemon } from "./src/models/Pokemon";
import { PokemonResult } from "./src/models/PokemonResult";
import { isEqual } from "./src/utils/functions/arrayFunctions";

export default function App() {
  const [pokemons, setPokemons] = useState<PokemonResult[]>([]);

  const getPokemon = () => {
    instance
      .get<Pokemon>(`pokemon`)
      .then((response) => {
        const result = response.data.results;

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
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.list}
        data={pokemons}
        renderItem={({ item }) => <Cell title={item.name} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  list: {
    margin: 16,
  },
});
