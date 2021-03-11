import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Player from '../screens/Player';
import Library from '../screens/Library';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Player" component={Player} />
      <Stack.Screen name="Library" component={Library} />
    </Stack.Navigator>
  );
};


export default AppNavigator;
