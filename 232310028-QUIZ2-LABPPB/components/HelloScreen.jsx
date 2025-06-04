import React from 'react';
import { View, Text, Button, Image, Alert, StyleSheet } from 'react-native';

const HelloScreen = () => {
  const handlePress = () => {
    Alert.alert("Anda akan mulai Quiz!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Halo, Selamat Datang di Quiz React Native!</Text>
      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPrHNcuKSz9B4BaCHoa8yIQ1o4VtgWNrKfxQ&s' }}
        style={styles.image}
      />
      <Button title="Klik Mulai" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20,
  },
  title: {
    fontSize: 20, fontWeight: 'bold', marginBottom: 20, textAlign: 'center',
  },
  image: {
    width: 200, height: 200, marginBottom: 20,
  },
});

export default HelloScreen;
