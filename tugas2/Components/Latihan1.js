import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Latihan1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <Text style={styles.title}>History of Bicycle</Text>
        <Text style={styles.paragraph}>
          A bicycle, also called a pedal cycle, bike, push-bike or cycle, is a 
          human-powered or motor-powered assisted, pedal-driven, single-track vehicle.
        </Text>
      </View>

      <View style={styles.imageBox}>
        <Image
          source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwGUus5cz5c1MdoBZWy5sAXCP4bd6tPI6_FA&s" }}
          style={styles.image}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f3f3",
  },
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
  imageBox: {
    marginTop: 20,
    width: 80,
    height: 80,
    backgroundColor: "#90caf9",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 50,
  },
});

export default Latihan1;