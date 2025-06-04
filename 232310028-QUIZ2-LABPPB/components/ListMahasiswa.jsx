import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ListMahasiswa = () => {
  const [data] = useState([
    { id: '1', nama: 'Fadhil', npm: '232310028' },
    { id: '2', nama: 'Dicky', npm: '232310015' },
    { id: '3', nama: 'Daffa', npm: '232310024' },
    { id: '4', nama: 'Joshua', npm: '23231002' },
    { id: '5', nama: 'Alvio', npm: '23231001' },
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.name}>{item.nama}</Text>
      <Text>NPM: {item.npm}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  card: {
    backgroundColor: '#f2f2f2', padding: 15, marginVertical: 8, borderRadius: 8,
  },
  name: { fontWeight: 'bold', fontSize: 16 },
});

export default ListMahasiswa;
