import React, { useState } from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    if (count >= 10) {
      Alert.alert('Peringatan', 'Nilai maksimal tercapai.');
    } else {
      setCount(count + 1);
    }
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter App</Text>
      <Text style={styles.count}>{count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="+" onPress={increase} />
        <View style={styles.spacer} />
        <Button title="-" onPress={decrease} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
  count: { fontSize: 48, marginVertical: 20 },
  buttonContainer: { flexDirection: 'row' },
  spacer: { width: 20 },
});

export default CounterApp;
