import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const Latihan4RFC = () => {
  const [bio, setBio] = useState({
    identity: {
      npm: "232310028",
      firstname: "Fadhil",
      middlename: "Luki",
      lastname: "Pratama",
    },
    educations: [
      { id: 1, school: "SDN Pamoyanan 3 Kota Bogor" },
      { id: 2, school: "SMPIT Nurul FataKota Bogor" },
      { id: 3, school: "SMK 2 Dasa Semesta Kota Bogor" },
    ],
    mobile_phone: "083112746096",
    email: "232310028@student.ibik.ac.id",
    gender: "M",
    tall_body: 180,
    weight_body: 63,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Biodata</Text>
      <Text style={styles.text}>NPM: {bio.identity.npm}</Text>
      <Text style={styles.text}>
        Nama: {bio.identity.firstname} {bio.identity.middlename} {bio.identity.lastname}
      </Text>
      <Text style={styles.text}>Email: {bio.email}</Text>
      <Text style={styles.text}>Telepon: {bio.mobile_phone}</Text>
      <Text style={styles.text}>Gender: {bio.gender}</Text>
      <Text style={styles.text}>Tinggi Badan: {bio.tall_body} cm</Text>
      <Text style={styles.text}>Berat Badan: {bio.weight_body} kg</Text>
      <Text style={styles.title}>Pendidikan</Text>
      {bio.educations.map((edu) => (
        <Text key={edu.id} style={styles.text}>- {edu.school}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3",
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  text: {
    fontSize: 14,
    marginTop: 5,
  },
});

export default Latihan4RFC;