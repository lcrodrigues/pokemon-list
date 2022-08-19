import { PokemonResult } from "../../models/PokemonResult";

export const isEqual = (
  first: PokemonResult[],
  second: PokemonResult[]
): boolean => {
  const intersect = first.filter((pokemon) =>
    second.map((p) => p.name).includes(pokemon.name)
  );

  return intersect.length > 0;
};
