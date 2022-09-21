import React from "react";
import { capitalizeFirstLetter } from "../utils/functions/stringFunctions";
import Favorite from "./Favorite";
import { PokemonResult } from "../models/PokemonResult";
import styled from "styled-components/native";
import { TouchableOpacityProps } from "react-native";
import { useDispatch } from "react-redux";
import { setFavoriteByName } from "../store/pokemon/pokemonListSlice";

interface ContainerProps {
  index: number;
}

const Container = styled.TouchableOpacity<ContainerProps>`
  padding: 16px;
  margin: 8px 0px;
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props: ContainerProps) =>
    props.index % 3 == 0
      ? "#8CCE7C"
      : props.index % 3 === 1
      ? "#F66666"
      : "#66C2F6"};
`;

const Text = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: white;
`;

interface CellProps extends TouchableOpacityProps {
  pokemon: PokemonResult;
  index: number;
}

const Cell = ({ pokemon, index, onPress }: CellProps) => {
  const dispatch = useDispatch();

  const handleFavoriteOnPress = () => {
    dispatch(setFavoriteByName(pokemon));
  };

  return (
    <Container index={index} onPress={onPress}>
      <Text>{capitalizeFirstLetter(pokemon.name)}</Text>
      <Favorite
        isFavorite={pokemon.isFavorite}
        handleOnPress={handleFavoriteOnPress}
      />
    </Container>
  );
};

export default Cell;
