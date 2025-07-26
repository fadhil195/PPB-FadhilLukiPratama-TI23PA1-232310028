import React from "react";
import { ScrollView, StyleSheet } from "react-native";

const ExpScrollView = ({ children }) => {
  return <ScrollView style={styles.scroll}>{children}</ScrollView>;
};

const styles = StyleSheet.create({
  scroll: {
    paddingHorizontal: 10,
  },
});

export default ExpScrollView;
