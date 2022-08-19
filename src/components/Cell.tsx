import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { capitalizeFirstLetter } from "../utils/functions/stringFunctions";

interface CellProps {
  title: string;
}

const Cell = ({ title }: CellProps) => {
  return (
    <View style={styles.container}>
      <Text>{capitalizeFirstLetter(title)}</Text>
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
  },
});
