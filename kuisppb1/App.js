import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProfileRFC from './assets/Components/ProfileRFC';
import ProfileRCC from './assets/Components/ProfileRCC';
import ButtonColor from './assets/Components/ButtonColor';
import FormPendaftaran from './assets/Components/FormPendaftaran';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ProfileRFC></ProfileRFC> */}
      {/* <ProfileRCC></ProfileRCC> */}
      {/* <ButtonColor></ButtonColor> */}
      <FormPendaftaran></FormPendaftaran>
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
