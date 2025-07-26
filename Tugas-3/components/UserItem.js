import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const UserItem = ({ item }) => {
  const imageUri =
    item.gender === "M"
      ? "https://down-id.img.susercontent.com/file/fe052b66ea3e47100627277a48b67586"
      : "https://img2.pngdownload.id/20240301/sxz/transparent-cartoon-girl-long-curly-brown-hair-woman-freckles-woman-with-curly-hair-and-sad-1710857251080.webp";

  return (
    <View style={styles.userContainer}>
      <View style={styles.userInfo}>
        <Image source={{ uri: imageUri }} style={styles.avatar} />
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.fullname}>{item.fullname}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.followButton}>
        <Text style={styles.followText}>Follow</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    marginBottom: 5,
    borderBottomWidth: 0.5,
    borderColor: "#aaa",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 100,
    marginRight: 15,
    backgroundColor: "#f0f0f0",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  fullname: {
    fontSize: 14,
    color: "#333",
  },
  followButton: {
    backgroundColor: "purple",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 5,
  },
  followText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default UserItem;
