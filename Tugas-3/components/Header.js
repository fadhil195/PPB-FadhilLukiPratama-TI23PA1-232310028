import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingVertical: 20,
    backgroundColor: "purple",
    alignItems: "center",
    marginBottom: 10,
  },
  headerText: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default Header;
