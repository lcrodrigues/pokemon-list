import { Text } from "react-native";
import React, { useEffect } from "react";
import styled from "styled-components/native";
import { DetailsProps } from "../navigation/PokedexNavigator";
import { getPokemonDetails } from "../../services/api";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const DetailsScreen = ({ route }: DetailsProps) => {
  const name = route.params.pokemon.name;
  const url = route.params.pokemon.url;

  useEffect(() => {
    getPokemonDetails(url);
  }, []);

  return (
    <Container>
      <Text>{name}</Text>
    </Container>
  );
};

export default DetailsScreen;
