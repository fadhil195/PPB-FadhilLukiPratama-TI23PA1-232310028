import React from "react";
import { View, Image, StyleSheet } from "react-native";

const ProfileImage = () => {
  return (
    <View style={styles.imageBox}>
      <Image
        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwGUus5cz5c1MdoBZWy5sAXCP4bd6tPI6_FA&s" }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default ProfileImage;