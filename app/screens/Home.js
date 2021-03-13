import {tailwind} from '../../lib/tailwind';
import React, {useContext} from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import Nav from '../components/Nav'
import {ThemeContext} from '../context/ThemeProvider';

const Home = ({
    navigation,
}) => {
  const { dark, theme, toggle } = useContext(ThemeContext);
    
  return (
    <View style={[styles.contentHome, {backgroundColor: theme.bg}]}>
      <Nav type='Home' navigation={navigation} isDark={dark} toggle={toggle} theme={theme}/>
      <Text style={{color: theme.titleList}}>Home</Text>
      <Button
        title="Go to Player"
        onPress={() => navigation.navigate('Player')}
      />
      <Button
        title="Go to Library"
        onPress={() => navigation.navigate('Library')}
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
