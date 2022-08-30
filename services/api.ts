import axios, { AxiosResponse } from "axios";
import { Pokemon } from "../src/models/Pokemon";
import { NetworkResponse } from "./NetworkResponse";

const instance = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export default instance;

export const getPokemon = async (
  limit: number,
  offset: number
): Promise<NetworkResponse<Pokemon>> => {
  const result = await instance.get<Pokemon>(
    `pokemon?limit=${limit}&offset=${offset}`
  );

  try {
    return {
      kind: "success",
      body: result.data,
    };
  } catch (e) {
    console.log(e);

    return {
      kind: "failure",
    };
  }
};
