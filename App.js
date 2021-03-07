import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {tailwind} from './lib/tailwind';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>¡Agregando tailwind! 👋</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...tailwind('bg-darkShades-500'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    ...tailwind('bg-blue-500 px-5 py-3 rounded-full text-white font-semibold text-lg'),
  }
});
