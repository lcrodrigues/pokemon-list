import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPokemon } from "../../../services/api";
import { Pokemon } from "../../models/Pokemon";
import { RootState } from "../store";
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
  reducers: {
    setFavoriteByName: (state, action) => {
      const list = state.pokemon.results;
      const pokemonIndex = list?.findIndex(
        (pokemon) => pokemon.name === action.payload.name
      );

      if (pokemonIndex !== -1) {
        list[pokemonIndex].isFavorite = !list[pokemonIndex].isFavorite;
      }
    },
  },
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

export const { setFavoriteByName } = pokemonListSlice.actions;

export const getFavorites = (state: RootState) => {
  const favorites = state.pokemonList.pokemon.results.filter(
    (pokemon) => pokemon.isFavorite
  );

  return favorites;
};

export default pokemonListSlice.reducer;
