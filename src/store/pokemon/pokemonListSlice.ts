import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance, { getPokemon } from "../../../services/api";
import { Pokemon } from "../../models/Pokemon";
import { PokemonResult } from "../../models/PokemonResult";
import { isEqual } from "../../utils/functions/arrayFunctions";

export type PokemonListState = {
  pokemon: Pokemon;
  loading: boolean;
  error?: boolean;
  offset: number;
};

const initialState: PokemonListState = {
  pokemon: {
    count: 0,
    next: undefined,
    previous: undefined,
    results: [],
  },
  loading: false,
  error: false,
  offset: 0,
};

export const fetchPokemon = createAsyncThunk<
  { pokemon: Pokemon },
  { offset: number }
>("fetchPokemon", async ({ offset }) => {
  const response = await getPokemon(20, offset);

  if (response.kind === "success") {
    return {
      pokemon: response.body!,
    };
  } else {
    throw "Error fetching Pokemons";
  }
});

const pokemonListSlice = createSlice({
  name: "pokemonList",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemon.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(fetchPokemon.fulfilled, (state, action) => {
        state.offset += 20;
        state.loading = false;

        state.pokemon = {
          ...action.payload.pokemon,
          results: state.pokemon.results.concat(
            !isEqual(action.payload.pokemon.results, state.pokemon.results)
              ? action.payload.pokemon.results
              : []
          ),
        };
      })
      .addCase(fetchPokemon.rejected, (state) => {
        state.error = true;
        state.loading = false;
      });
  },
});

export default pokemonListSlice.reducer;
