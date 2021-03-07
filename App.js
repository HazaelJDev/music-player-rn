import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {tailwind} from './lib/tailwind';
import { 
  Roboto_400Regular,
  Roboto_500Medium,
} from '@expo-google-fonts/roboto'
import { 
  Poppins_600SemiBold,
  useFonts
} from '@expo-google-fonts/poppins'

//Definiendo las fuentes que usaremos en el proyecto
const fonts = {
  title: {
    fontFamily:'Poppins_600SemiBold',
    fontSize: 60,
  },
  subtitle: {
    fontFamily:'Roboto_500Medium',
    fontSize: 32,
  },
  body: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
  },
}

export default function App() {
  //Cargando las fuentes con el Hook
  let [fontsLoaded] = useFonts({
    Poppins_600SemiBold, 
    Roboto_500Medium, 
    Roboto_400Regular,
  });

  if(!fontsLoaded){
    return null;
  }else{
    return (
      <View style={styles.container}>
        <Text style={styles.text}>¡Agregando tailwind! 👋</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...tailwind('bg-darkShades-500'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    ...tailwind('bg-blue-500 px-5 py-3 rounded-full text-white'),
    ...fonts.body
  }
});
