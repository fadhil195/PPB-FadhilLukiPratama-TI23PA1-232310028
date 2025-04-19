import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileRFC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://img.lovepik.com/png/20231122/persona-profile-picture-icon-icon-line-icon-for-web-application_666456_wh1200.png' }}
        style={styles.avatar}
      />
      <Text style={styles.text}>Nama: Fadhil Luki Pratama</Text>
      <Text style={styles.text}>NPM: 232310028</Text>
      <Text style={styles.text}>Jurusan: Teknologi Informasi</Text>
      <Text style={styles.text}>Hobi: Baca Manhwa</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 20,
    backgroundColor: '#e0f7fa',
    borderRadius: 10,
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    marginVertical: 2,
  },
});

export default ProfileRFC;