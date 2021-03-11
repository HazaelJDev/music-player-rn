import {tailwind} from '../../lib/tailwind';
import React from 'react';
import { Text, View, Button } from 'react-native';
import Nav from '../components/Nav'

const Library = ({
    navigation,
}) => (
    <View style={styles.contentLibrary}>
      <Nav type='Library' theme='dark' navigation={navigation}/>
      <Text>Library Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
);

const styles = {
  contentLibrary: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'space-around' 
  }
};

export default Library;
