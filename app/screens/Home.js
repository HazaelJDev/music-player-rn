import {tailwind} from '../../lib/tailwind';
import React, {useContext} from 'react';
import { Text, View, Button, StyleSheet, Image, ImageBackground } from 'react-native';
import Nav from '../components/Nav'
import {ThemeContext} from '../context/ThemeProvider';
import Playing from '../components/Playing';

const Home = ({
    navigation,
}) => {
  const { dark, theme, toggle } = useContext(ThemeContext);
    
  return (
    <View style={[styles.contentHome, {backgroundColor: theme.bg}]}>
      <Nav type='Home' navigation={navigation} isDark={dark} toggle={toggle} theme={theme}/>
      <Playing theme={theme}/>
      <Text style={{color: theme.titleList}}>Home</Text>
      <Button
        title="Go to Player"
        onPress={() => navigation.navigate('Player')}
      />

    </View>
  )
};

const styles = StyleSheet.create({
  contentHome: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'space-around' 
  }
});


export default Home;
