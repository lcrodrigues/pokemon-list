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

  return (
    <Container>
      <ImageContainer>
        <Pokemon
          source={{
            uri: `${image}`,
          }}
        />
      </ImageContainer>
    </Container>
  );
};

export default DetailsScreen;
