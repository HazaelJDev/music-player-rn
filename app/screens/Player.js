import React from 'react';
import { Text, View, Button } from 'react-native';

const Player = ({
    navigation,
}) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
      <Text>Player Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
);

export default Player;
