import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [text, setText] = useState("");  // Perbaiki di sini

  return (
    <View style={styles.container}>
      <Text>LAPTOP GOBLOK</Text>
      <Text>Bagaimana pelajaran hari ini?</Text>
      <TextInput
        style={styles.input}
        placeholder="isi disini.."
        value={text}
        onChangeText={setText}
      />
      <Text>kesan pesanmu: {text}</Text>  {/* Pastikan ada spasi antara "kesan pesanmu:" dan {text} */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
  }
});
