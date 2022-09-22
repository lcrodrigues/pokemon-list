import { Text } from "react-native";
import { StatsBar } from "../components/StatsBar";
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components/native";
import { DetailsProps } from "../navigation/PokedexNavigator";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { fetchPokemonDetails } from "../store/pokemon/pokemonDetailSlice";

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

const TextContainer = styled.View`
  position: absolute;
  z-index: 4;

  bottom: 0;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 12px 36px;
  width: 100%;
`;
const PokemonName = styled.Text`
  font-size: 18px;
  color: black;
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
  const [firstType] = types;
  const image = sprites.front_default;
  return (
    <Container>
      <ImageContainer>
        <TextContainer>
          <Text> {firstType.type.name} </Text>
          <PokemonName> {name} </PokemonName>
          <Text> {weight} </Text>
        </TextContainer>
        <Pokemon
          source={{
            uri: `${image}`,
          }}
        />
      </ImageContainer>

      {stats.map((stat, index) => {
        return (
          <>
            <StatsBar
              key={index}
              statsValue={stat.base_stat}
              statsName={stat.stat.name}
            />
          </>
        );
      })}
    </Container>
  );
};

export default DetailsScreen;
