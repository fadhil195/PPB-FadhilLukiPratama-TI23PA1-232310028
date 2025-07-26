import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import UserList from "./components/UserList";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <UserList />
    </SafeAreaView>
  );
}
