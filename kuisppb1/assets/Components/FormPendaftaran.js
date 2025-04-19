import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const FormPendaftaran = () => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [telp, setTelp] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (nama && email && telp) {
      setSubmitted(true);
    } else {
      alert('Semua field wajib diisi');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nama Lengkap:</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan nama"
        value={nama}
        onChangeText={setNama}
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Text style={styles.label}>No. Telp:</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan nomor telepon"
        value={telp}
        onChangeText={setTelp}
        keyboardType="phone-pad"
      />

      <Button title="Submit" onPress={handleSubmit} />

      {submitted && (
        <View style={styles.result}>
          <Text style={styles.resultTitle}>Data Pendaftaran:</Text>
          <Text>Nama: {nama}</Text>
          <Text>Email: {email}</Text>
          <Text>Telepon: {telp}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 10,
  },
  label: {
    marginTop: 10,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 6,
    marginTop: 5,
  },
  result: {
    marginTop: 20,
    backgroundColor: '#e0f7fa',
    padding: 15,
    borderRadius: 10,
  },
  resultTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 16,
  },
});

export default FormPendaftaran;