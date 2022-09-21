import React from "react";
import styled from "styled-components/native";

interface StatsStyleProps {
  setWidth: number;
  setColor: string;
}

interface ConatainerStyleProps {
  setColor: string;
}

interface StatsBarProps {
  setWidth: number;
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
  height: 2.5%;
  border-width: 2px;
  border-color: ${(props) => props.setColor};
`;
const Stats = styled.View<StatsStyleProps>`
  position: absolute;
  height: 100%;
  width: ${(props) => props.setWidth}%;
  background-color: ${(props) => props.setColor};
`;

export const StatsBar = ({ setWidth, statsName }: StatsBarProps) => {
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
    <Container setColor={color}>
      <Stats setWidth={setWidth * (100 / 150)} setColor={color} />
    </Container>
  );
};
