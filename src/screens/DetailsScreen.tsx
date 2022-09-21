import { Text } from "react-native";
import { StatsBar } from "../components/StatsBar";
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components/native";
import { DetailsProps } from "../navigation/PokedexNavigator";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { fetchPokemonDetails } from "../store/pokemon/pokemonDetailSlice";

type OrderedStats = {
  baseStat: number;
  name: string;
};
const Container = styled.View`
  flex: 1;
  align-items: center;
`;

const ImageContainer = styled.View`
  width: 100%;
  height: 45%;
`;

const Pokemon = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const DetailsScreen = ({ route }: DetailsProps) => {
  const name = route.params.pokemon.name;
  const url = route.params.pokemon.url;
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchPokemonDetails({ url }));
  }, []);

  const screenState = useSelector((state: RootState) => state.pokemonDetail);
  const { abilities, stats, types, weight, sprites } = screenState.detail;
  const image = sprites.front_default;
  return (
    <Container>
      <ImageContainer>
        <Pokemon
          source={{
            uri: `${image}`,
          }}
        />
      </ImageContainer>

      {stats.map((stat, index) => {
        return (
          <>
            <Text>{stat.base_stat}</Text>
            <StatsBar
              key={index}
              setWidth={stat.base_stat}
              statsName={stat.stat.name}
            />
          </>
        );
      })}
    </Container>
  );
};

export default DetailsScreen;
