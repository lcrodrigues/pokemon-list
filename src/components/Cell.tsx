import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { capitalizeFirstLetter } from "../utils/functions/stringFunctions";
import Favorite from "./Favorite";

interface CellProps {
  title: string;
}

const Cell = ({ title }: CellProps) => {
  return (
    <View style={styles.container}>
      <Text>{capitalizeFirstLetter(title)}</Text>
      <Favorite isFavorite={false} />
    </View>
  );
};

export default Cell;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginVertical: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
