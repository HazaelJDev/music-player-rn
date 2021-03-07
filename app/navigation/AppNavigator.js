import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Player from '../screens/Player';
import Library from '../screens/Library';
import { MaterialIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Player" component={Player} />
      <Stack.Screen name="Library" component={Library} />
    </Stack.Navigator>
  );
};

{/* <MaterialIcons name='library-music' size={size} color={color} /> */}

export default AppNavigator;
