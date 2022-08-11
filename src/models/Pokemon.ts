import { PokemonResult } from "./PokemonResult";

export type Pokemon = {
  count: number;
  next?: string;
  previous?: string;
  results: PokemonResult[];
};
