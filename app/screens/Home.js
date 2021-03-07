import React from 'react';
import { Text, View, Button } from 'react-native';

const Home = ({
    navigation,
}) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
      <Text>Home Screen</Text>
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

export default Home;
