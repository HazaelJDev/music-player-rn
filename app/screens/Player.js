import {tailwind} from '../../lib/tailwind';
import React from 'react';
import { Text, View, Button } from 'react-native';
import Nav from '../components/Nav'

const Player = ({
    navigation,
}) => (
    <View style={styles.contentPlayer}>
      <Nav type='Library' theme='dark' navigation={navigation}/>
      <Text>Player Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
);

const styles = {
  contentPlayer: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'space-around' 
  }
};

export default Player;
