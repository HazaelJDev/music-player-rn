import React from 'react';
import { Text, View, Image} from 'react-native';
import fonts from '../../lib/fonts';
import { MaterialIcons,} from '@expo/vector-icons';
//import { BlurView } from 'expo';
//import {ProgressBar} from 'react-native-paper' En un futuro implementar esta
const ProgressBar = () => {
    return (
        <View style={styles.progressBar}>
            <View style={styles.progressBarProcess}/>
        </View>
    )
}

const Playing = ({
    theme
}) => {
    return (
        <View style={styles.contentPlaying}>
            <View style={[styles.contentMusic,{backgroundColor:theme.overlayPlaying}]}>
                <MaterialIcons name='play-circle-fill' size={48} color='#F1F1F1'/>
                <View style={styles.songData}>
                    <View style={styles.dataSong}>
                        <Text numberOfLines={1} style={[{...fonts.canciones}, {color: theme.textPlaying}]}>Abrazos impares</Text>
                        <Text style={[{...fonts.body}, {color: theme.textPlaying}]}>Rayden</Text>
                    </View>
                    <Text style={[{...fonts.body}, {color: theme.textPlaying}]}>-1:07</Text>
                </View>
            </View>
            <Image style={styles.album} source={{uri: require("../../assets/albums/sinonimo.png")}} resizeMode='cover' blurRadius={3} defaultSource={{uri: require("../../assets/albums/with-out-face.png")}}/>
            <ProgressBar />
        </View>
    )
};

const styles = {
    progressBar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        width: '100%',
        height: 8,
        backgroundColor: '#96DCFB',
        position: 'absolute',
        bottom: 0,
        left: 0,
        zIndex: 3,
    },
    progressBarProcess: {
        width: '70%',
        height: 8,
        backgroundColor: '#0074D9',
    },
    contentPlaying:{
        width: "100%",
        height: 120,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        position: 'absolute',
        bottom: 0,
        left: 0,
        zIndex: 3,
    },
    contentMusic:{
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        width: "100%",
        height: 120,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 19,
        paddingVertical: 34
        //El blur se tiene que agregar con una libreria o checar una forma nativa
    },
    songData:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'center',
        zIndex: 3,
    },
    dataSong:{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: 'center',
        margingHorizontal: 16,
        marginVertical: 0,
        width: 226,
        height: 82

    },
    album:{
        //Checar por que no funciona el border radius en la imagen 
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        width: '100%',
        height: 120,
        position: 'absolute',
        bottom:0,
        left:0,
        zIndex: -10
    },
    controlls: {
        margingHorizontal: 16,
    }
}

export default Playing;
