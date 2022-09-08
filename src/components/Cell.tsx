import React from "react";
import { capitalizeFirstLetter } from "../utils/functions/stringFunctions";
import Favorite from "./Favorite";

import styled from "styled-components/native";
import { TouchableOpacityProps, ViewProps } from "react-native";

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
  title: string;
  index: number;
}

const Cell = ({ title, index, onPress }: CellProps) => {
  return (
    <Container index={index} onPress={onPress}>
      <Text>{capitalizeFirstLetter(title)}</Text>
      <Favorite isFavorite={false} />
    </Container>
  );
};

export default Cell;
