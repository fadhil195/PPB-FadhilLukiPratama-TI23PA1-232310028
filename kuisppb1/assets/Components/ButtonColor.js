import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ButtonColor = () => {
  const [warna, setWarna] = useState('blue');

  const ubahWarna = () => {
    if (warna === 'blue') {
      setWarna('red');
    } else {
      setWarna('blue');
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.kotak, { backgroundColor: warna }]} />
      <TouchableOpacity style={styles.tombol} onPress={ubahWarna}>
        <Text style={styles.teksTombol}>Ubah Warna</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: 20,
  },
  kotak: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 10,
  },
  tombol: {
    backgroundColor: '#333',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  teksTombol: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ButtonColor;