import { MaterialIcons,} from '@expo/vector-icons';

import React, { useState } from 'react';
import { Text, View } from 'react-native';

const Controlls = ({handlerCurrentlySong}) => {
    const [music, setMusic] = useState(false);
    const [repeat, setRepeat] = useState(false);
    const [shuffle, setSuffle] = useState(false);

    return (
        <View style={styles.contentControlls}>
            <View style={styles.firstRow}>
                <MaterialIcons name='skip-previous' size={48} color="#0074D9" onPress={()=>{handlerCurrentlySong('previous')}} />
                <MaterialIcons name={music ? 'pause' : 'play-arrow'} size={48} color="#0074D9" onPress={()=> setMusic(!music)} />
                <MaterialIcons name='skip-next' size={48} color="#0074D9" onPress={()=>{handlerCurrentlySong('next')}} />
            </View>
            <View style={styles.secondRow}>
                <MaterialIcons name={repeat ? 'repeat-on':'repeat'} size={48} color="#0074D9" onPress={()=> setRepeat(!repeat)} />
                <MaterialIcons name={shuffle ? 'shuffle-on':'shuffle'} size={48} color="#0074D9" onPress={()=> setSuffle(!shuffle)} />
            </View>
        </View>
    )
};


const styles = {
    contentControlls: {
        diplay: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: "80%",
        position: 'absolute',
        top: 640,
        marginLeft: 20,
        marginTop: 32,
    },
    firstRow:{
        diplay: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: "80%",
        heigh:  48,
    },
    secondRow:{
        marginTop: 16,
        diplay: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: "100%",
        heigh:  48,
    }
}

export default Controlls;
