import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface CellProps {
  title: string;
}

const Cell = ({ title }: CellProps) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
};

export default Cell;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    marginVertical: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
  },
});
