
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HistoryText = () => {
  return (
    <View style={styles.textBox}>
      <Text style={styles.title}>History of Bicycle</Text>
      <Text style={styles.paragraph}>
        A bicycle, also called a pedal cycle, bike, push-bike or cycle, is a 
        human-powered or motor-powered assisted, pedal-driven, single-track vehicle.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textBox: {
    width: "80%",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#b71c1c",
    padding: 10,
    textAlign: "center",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  paragraph: {
    fontSize: 14,
    textAlign: "center",
    marginTop: 10,
  },
});

export default HistoryText;
