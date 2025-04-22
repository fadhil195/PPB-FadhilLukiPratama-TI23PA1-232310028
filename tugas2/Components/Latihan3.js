import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Latihan3 = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/LOGO_IBIK.png/1200px-LOGO_IBIK.png' }} 
        style={{ width: 100, height: 100, marginBottom: 20}}
      />
      <Text style={{ color: '#fff', fontSize: 16}}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#800080',
    width: 500,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Latihan3;
