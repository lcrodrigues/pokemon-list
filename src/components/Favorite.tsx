import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { FilledPokeball, Pokeball } from "../../assets/icons";

interface FavoriteProps {
  isFavorite: boolean;
  handleOnPress: () => void;
}

const Favorite = ({ isFavorite, handleOnPress }: FavoriteProps) => {
  return (
    <TouchableOpacity onPress={handleOnPress}>
      {isFavorite ? (
        <FilledPokeball width={24} height={24} />
      ) : (
        <Pokeball width={24} height={24} />
      )}
    </TouchableOpacity>
  );
};

export default Favorite;
