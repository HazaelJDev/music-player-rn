import {tailwind} from '../../lib/tailwind'
import React from 'react';
import { Text, View} from 'react-native';
import { MaterialIcons,} from '@expo/vector-icons';

const Nav = ({type,navigation, isDark, toggle, theme}) => (
    type === 'Home' ?  
        <View style={styles.contentNav}>
            <MaterialIcons name={isDark ? 'wb-sunny' : 'nightlight-round'} size={48} color={theme.modeIcon} onPress={toggle}/>
            <MaterialIcons name='library-music' size={48} color={theme.libraryIcon} onPress={() => navigation.navigate('Library')} />
        </View>
    :
        <View style={styles.contentNav}>
            <MaterialIcons name="arrow-back" size={48} color={theme.arrowIcon} onPress={() => navigation.navigate('Home')}/>
            <MaterialIcons name={isDark ? 'wb-sunny' : 'nightlight-round'} size={48} color={theme.modeIcon} onPress={toggle}/>
        </View>                                             
);

const styles = {
    contentNav: {
        ...tailwind('min-w-full'),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-around',
    }    
}

export default Nav;
