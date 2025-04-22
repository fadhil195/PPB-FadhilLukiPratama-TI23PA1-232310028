import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Latihan1 from './Components/Latihan1';
import Latihan2 from './Components/Latihan2';
import Latihan3 from './Components/Latihan3';
import Latihan4RCC from './Components/Latihan4RCC';
import Latihan4RFC from './Components/Latihan4RFC';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>TUGAS 2 LAB PPB FADHIL LUKI PRATAMA 232310028</Text>
      {/* <Latihan1></Latihan1>
      <Latihan2></Latihan2>
      <Latihan3></Latihan3>
      <Latihan4RCC></Latihan4RCC>
      <Latihan4RFC></Latihan4RFC> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
