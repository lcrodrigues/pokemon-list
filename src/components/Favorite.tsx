import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { FilledPokeball, Pokeball } from "../../assets/icons";

interface FavoriteProps {
  isFavorite: boolean;
}

const Favorite = ({ isFavorite }: FavoriteProps) => {
  const [favorite, setFavorite] = useState(isFavorite);

  const handleSetFavorite = () => {
    setFavorite((oldValue) => !oldValue);
  };

  return (
    <TouchableOpacity onPress={handleSetFavorite}>
      {favorite ? (
        <FilledPokeball width={24} height={24} />
      ) : (
        <Pokeball width={24} height={24} />
      )}
    </TouchableOpacity>
  );
};

export default Favorite;

const styles = StyleSheet.create({});
