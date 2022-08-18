import { PokemonResult } from "../../models/PokemonResult";

export const isEqual = (
  first: PokemonResult[],
  second: PokemonResult[]
): boolean => {
  const firstNames = first.map((item) => item.name);
  const secondNames = second.map((item) => item.name);

  const intersection = firstNames.filter((item) => secondNames.includes(item));
  return intersection.length > 0;
};
