import {tailwind} from '../../lib/tailwind'
import React from 'react';
import { Text, View} from 'react-native';
import { MaterialIcons,} from '@expo/vector-icons';


const Nav = ({type, theme, navigation}) => (
    type === 'Home' ?  
        <View style={styles.contentNav}>
            <MaterialIcons name={theme === 'dark' ? 'wb-sunny' : 'nightlight-round'} size={48} color={theme === 'dark' ? '#FFDC00' : '#858585'}/>
            <MaterialIcons name='library-music' size={48} color='#0074D9' onPress={() => navigation.navigate('Library')} />
        </View>
    :
        <View style={styles.contentNav}>
            <MaterialIcons name="arrow-back" size={48} color={theme === 'dark' ? '#DDDDDD' : '#111111'} onPress={() => navigation.navigate('Home')}/>
            <MaterialIcons name={theme === 'dark' ? 'wb-sunny' : 'nightlight-round'} size={48} color={theme === 'dark' ? '#FFDC00' : '#858585'}/>
        </View>
);

const styles = {
    contentNav: {
        ...tailwind('min-w-full bg-darkShades-500'),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'space-betwen',
        justifyContent: 'space-around',
    }    
}

export default Nav;
