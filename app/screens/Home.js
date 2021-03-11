import {tailwind} from '../../lib/tailwind';
import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import Nav from '../components/Nav'

const Home = ({
    navigation,
}) => (
    <View style={styles.contentHome}>
      <Nav type='Home' theme='dark' navigation={navigation}/>
      <Button
        title="Go to Player"
        onPress={() => navigation.navigate('Player')}
      />
      <Button
        title="Go to Library"
        onPress={() => navigation.navigate('Library')}
      />
    </View>
);

const styles = StyleSheet.create({
  contentHome: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'space-around' 
  }
});


export default Home;
