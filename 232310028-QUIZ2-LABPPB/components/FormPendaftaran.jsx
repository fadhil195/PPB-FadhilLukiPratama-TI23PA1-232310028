import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text } from 'react-native';

const FormPendaftaran = () => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [hp, setHp] = useState('');

  const handleSubmit = () => {
    if (!nama || !email || !hp) {
      Alert.alert('Peringatan', 'Semua field wajib diisi.');
    } else {
      Alert.alert('Data Terkirim', `Nama: ${nama}\nEmail: ${email}\nHP: ${hp}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nama Lengkap</Text>
      <TextInput style={styles.input} value={nama} onChangeText={setNama} />

      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" />

      <Text style={styles.label}>Nomor HP</Text>
      <TextInput style={styles.input} value={hp} onChangeText={setHp} keyboardType="phone-pad" />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  label: { marginTop: 10 },
  input: {
    borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5,
  },
});

export default FormPendaftaran;
