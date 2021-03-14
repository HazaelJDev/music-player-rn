import {tailwind} from '../../lib/tailwind';
import React, {useContext} from 'react';
import { Text, View, Button } from 'react-native';
import {ThemeContext} from '../context/ThemeProvider';
import Nav from '../components/Nav'
import Caratula from '../components/Caratula'

const Player = ({
    navigation,
}) => {
  const { dark, theme, toggle } = useContext(ThemeContext);
  return(
    <View style={[styles.contentPlayer, {backgroundColor: theme.bg}]}>
      <Nav type='Library' navigation={navigation} isDark={dark} toggle={toggle} theme={theme}/>
      <Caratula theme={theme} value={70}/>
    </View>
  )
};

const styles = {
  contentPlayer: { 
    display: 'flex',
    flex: 1,
    alignItems: 'stretch', 
    justifyContent: 'flex-start',
    with: "100%",
    paddingHorizontal: 16 
  }
};

export default Player;
