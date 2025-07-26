import React from "react";
import { TextInput, StyleSheet } from "react-native";

const SearchBar = ({ value, onChange }) => {
  return (
    <TextInput
      style={styles.searchBox}
      placeholder="Cari pengguna..."
      placeholderTextColor="#999"
      value={value}
      onChangeText={onChange}
    />
  );
};

const styles = StyleSheet.create({
  searchBox: {
    height: 40,
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginHorizontal: 10,
    marginBottom: 10,
    fontSize: 16,
  },
});

export default SearchBar;
