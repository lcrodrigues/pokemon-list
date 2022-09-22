import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPokemonDetails } from "../../../services/api";
import { PokemonDetailsResult } from "../../models/PokemonDetail";

export type PokemonDetailState = {
  detail: PokemonDetailsResult;
  loading: boolean;
  error?: boolean;
};

const initialState: PokemonDetailState = {
  detail: {
    stats: [
      {
        base_stat: 0,
        stat: {
          name: "attack",
        },
      },
    ],
    abilities: [
      {
        ability: {
          name: "",
        },
      },
    ],
    types: [
      {
        slot: 0,
        type: {
          name: "",
        },
      },
    ],
    weight: 0,
    sprites: {
      front_default: "",
    },
  },
  loading: false,
  error: false,
};

export const fetchPokemonDetails = createAsyncThunk<
  { detail: PokemonDetailsResult },
  { url: string }
>("fetchDetails", async ({ url }) => {
  const response = await getPokemonDetails(url);
  if (response.kind === "success") {
    return {
      detail: response.body!,
    };
  } else {
    throw "Error fetching Pokemons";
  }
});

const pokemonDetailSlice = createSlice({
  name: "pokemonDetail",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonDetails.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(fetchPokemonDetails.fulfilled, (state, action) => {
        state.detail = { ...action.payload.detail };
        state.loading = false;
      })
      .addCase(fetchPokemonDetails.rejected, (state) => {
        state.error = true;
        state.loading = false;
      });
  },
});

export default pokemonDetailSlice.reducer;
