import {tailwind} from '../../lib/tailwind';
import React, {useContext} from 'react';
import { Text, View, Button } from 'react-native';
import Nav from '../components/Nav'
import {ThemeContext} from '../context/ThemeProvider';

const Player = ({
    navigation,
}) => {
  const { dark, theme, toggle } = useContext(ThemeContext);
  return(
    <View style={[styles.contentPlayer, {backgroundColor: theme.bg}]}>
      <Nav type='Library' theme='dark' navigation={navigation} isDark={dark} toggle={toggle} theme={theme}/>
      <Text style={{color: theme.titleList}}>Player Screen</Text>
    </View>
  )
};

const styles = {
  contentPlayer: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'space-around' 
  }
};

export default Player;
