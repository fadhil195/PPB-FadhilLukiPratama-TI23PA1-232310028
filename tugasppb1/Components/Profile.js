import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileCard}>
        {/* Replacing profile image with GIF */}
        <Image 
          source={{ uri: 'https://i.pinimg.com/originals/46/41/61/4641611401ecb508c625eebe448da663.gif' }} 
          style={styles.profileImage}
        />
        <Text style={styles.header}>My Profile</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.info}>Nama: Fadhil Luki Pratama</Text>
          <Text style={styles.info}>Umur: 19</Text>
          <Text style={styles.info}>Alamat: Bogor Selatan, Pamoyanan</Text>
          <Text style={styles.info}>Jurusan: Teknologi Informasi</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003366',  // Dark blue background color
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  profileImage: {
    width: 150,  // Adjust size of GIF to be similar to profile image size
    height: 150,
    borderRadius: 75,  // Making GIF circular, same as profile image
    alignSelf: 'center',
    marginBottom: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginBottom: 15,
    fontFamily: 'Roboto-Bold',
  },
  infoContainer: {
    alignSelf: 'flex-start',  // Aligning the content to the left
    width: '100%',
  },
  info: {
    fontSize: 18,
    color: '#666',
    marginVertical: 8,  // Spacing between the text
    textAlign: 'left',  // Aligning text to the left
    fontFamily: 'Roboto-Regular',
  },
});

export default Profile;
