import {tailwind} from '../../lib/tailwind';
import React, {useContext} from 'react';
import { Text, View, Button, StyleSheet, Image, ImageBackground } from 'react-native';
import Nav from '../components/Nav'
import {ThemeContext} from '../context/ThemeProvider';
import Playing from '../components/Playing';
import  ListHome from '../components/ListHome';
import fakeList from '../../test/fakeList';

const Home = ({
  navigation,
}) => {
  const { dark, theme, toggle } = useContext(ThemeContext);
    
  return (
    <View style={[styles.contentHome, {backgroundColor: theme.bg}]}>
      <Nav type='Home' navigation={navigation} isDark={dark} toggle={toggle} theme={theme}/>
      <ListHome data={fakeList} theme={theme} navigation={navigation}/>
      <Playing theme={theme}/>
    </View>
  )
};

const styles = StyleSheet.create({
  contentHome: { 
    display: 'flex',
    flex: 1,
    alignItems: 'stretch', 
    justifyContent: 'flex-start',
    with: "100%",
    paddingHorizontal: 16
  }
});


export default Home;
