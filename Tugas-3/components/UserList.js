import React, { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import UserItem from "./UserItem";
import SearchBar from "./SearchBar";
import ExpScrollView from "./ExpScrollView";
import Header from "./Header";
import Users from "./Users"; // 

const UserList = () => {
  const [search, setSearch] = useState("");

  const filteredData = Users.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.fullname.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Header title="Daftar Pengguna" />
      <SearchBar value={search} onChange={setSearch} />
      <ExpScrollView>
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <UserItem item={item} />}
        />
      </ExpScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b2ebf2",
    paddingTop: 0,
  },
});

export default UserList;
