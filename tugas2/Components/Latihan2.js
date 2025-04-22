import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import HistoryText from "../Components2/HistoryText";
import ProfileImage from "../Components2/ProfileImage";

class Latihan2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HistoryText></HistoryText>
        <ProfileImage></ProfileImage>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f3f3",
  },
});

export default Latihan2;