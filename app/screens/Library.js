import {tailwind} from '../../lib/tailwind';
import React, {useContext} from 'react';
import { Text, View, Button } from 'react-native';
import Nav from '../components/Nav'
import {ThemeContext} from '../context/ThemeProvider';

const Library = ({
    navigation,
}) => {
  const { dark, theme, toggle } = useContext(ThemeContext);
  return (
    <View style={[styles.contentLibrary, {backgroundColor: theme.bg}]}>
      <Nav type='Library' theme='dark' navigation={navigation} isDark={dark} toggle={toggle} theme={theme}/>
      <Text style={{color: theme.titleList}}>Library Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
};

const styles = {
  contentLibrary: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'space-around' 
  }
};

export default Library;
