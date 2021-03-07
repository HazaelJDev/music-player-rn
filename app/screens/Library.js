import React from 'react';
import { Text, View, Button } from 'react-native';

const Library = ({
    navigation,
}) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
      <Text>Library Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
);

export default Library;
