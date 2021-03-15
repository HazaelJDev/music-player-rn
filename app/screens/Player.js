import {tailwind} from '../../lib/tailwind';
import React, {useContext, useState} from 'react';
import { Text, View, Button } from 'react-native';
import {ThemeContext} from '../context/ThemeProvider';
import fakeList from '../../test/fakeList';
import Nav from '../components/Nav'
import Caratula from '../components/Caratula'
import Controlls from '../components/Controlls';
import SongData from '../components/SongData';


const Player = ({navigation}) => {
  const { dark, theme, toggle } = useContext(ThemeContext);
  const [currentlySong, setCurrentlySong] = useState(fakeList[0]);

  const handlerCurrentlySong = (opc) =>{
    switch(opc){
      case "next":
        if(currentlySong.key === fakeList.length){
          setCurrentlySong(fakeList[0]);
        }else{
          setCurrentlySong(fakeList[currentlySong.key])
        }
      break;
      case "previous":
        if(currentlySong.key === 1){
          setCurrentlySong(fakeList[(fakeList.length-1)]);
        }else{
          setCurrentlySong(fakeList[currentlySong.key-2])
        }
      break;
      default:
        console.log('No hay una acción para esa opción')
      break;
    }
  }

  return(
    <View style={[styles.contentPlayer, {backgroundColor: theme.bg}]}>
      <Nav type='Library' navigation={navigation} isDark={dark} toggle={toggle} theme={theme}/>
      <Caratula data={currentlySong} theme={theme} value={70} />
      <SongData theme={theme} data={currentlySong}/>
      {/* <Controlls handlerCurrentlySong={handlerCurrentlySong}/> */}
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
