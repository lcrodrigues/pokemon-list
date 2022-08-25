import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

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
        <Ionicons name="heart" size={24} color="red" />
      ) : (
        <Ionicons name="heart-outline" size={24} color="red" />
      )}
    </TouchableOpacity>
  );
};

export default Favorite;

const styles = StyleSheet.create({});
