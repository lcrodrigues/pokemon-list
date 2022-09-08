import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { DetailsProps } from "../navigation/PokedexNavigator";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const DetailsScreen = ({ route }: DetailsProps) => {
  return (
    <Container>
      <Text>{route.params.pokemon.name}</Text>
    </Container>
  );
};

export default DetailsScreen;
