import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HelloScreen from './components/HelloScreen';
import CounterApp from './components/CounterApp';
import ListMahasiswa from './components/ListMahasiswa';
import FormPendaftaran from './components/FormPendaftaran';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    // <View style={styles.container}>
    //   {/* <HelloScreen></HelloScreen> */}
    //   {/* <CounterApp></CounterApp> */}
    //   {/* <ListMahasiswa></ListMahasiswa> */}
    //   {/* <FormPendaftaran></FormPendaftaran> */}
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='home' component={HomeScreen}/>
        <Stack.Screen name='profile' component={ProfileScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
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
