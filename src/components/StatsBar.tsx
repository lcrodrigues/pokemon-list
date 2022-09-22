import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

interface StatsStyleProps {
  setWidth: number;
  setColor: string;
}

interface ConatainerStyleProps {
  setColor: string;
}

interface TextStyleProps {
  marginLeft: number;
}

interface StatsBarProps {
  statsValue: number;
  statsName:
    | "hp"
    | "attack"
    | "defense"
    | "special-attack"
    | "special-defense"
    | "speed";
}

const Container = styled.View<ConatainerStyleProps>`
  width: 80%;
  height: 3%;
  border-width: 2px;
  border-color: ${(props) => props.setColor};
  margin-bottom: 12px;
`;
const Stats = styled.View<StatsStyleProps>`
  position: absolute;
  height: 100%;
  width: ${(props) => props.setWidth}%;
  background-color: ${(props) => props.setColor};
`;
const StatsValueText = styled.Text<TextStyleProps>`
  font-size: 12px;
  position: absolute;
  left: ${(props) => props.marginLeft}%;
`;

export const StatsBar = ({ statsValue, statsName }: StatsBarProps) => {
  let color: string;
  switch (statsName) {
    case "attack":
      color = "red";
      break;
    case "defense":
      color = "blue";
      break;
    case "hp":
      color = "green";
      break;
    case "special-attack":
      color = "purple";
      break;
    case "special-defense":
      color = "green";
      break;
    case "speed":
      color = "blue";
  }
  return (
    <>
      <Text> {statsName} </Text>
      <Container setColor={color}>
        <Stats setWidth={statsValue * (100 / 150)} setColor={color} />
        <StatsValueText marginLeft={statsValue * (100 / 150) + 2}>
          {statsValue}
        </StatsValueText>
      </Container>
    </>
  );
};
