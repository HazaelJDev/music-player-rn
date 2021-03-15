import React, { useState } from 'react';
import { Text, View, ImageBackground, Image } from 'react-native';
import { MaterialIcons,} from '@expo/vector-icons';

const Volumen = ({iconColor, value, bgBarPlayer}) => {
    const [mute, setMute] = useState(false);
    return (
        <View style={styles.contentVolumen}>
            <MaterialIcons name={mute ? 'volume-off': 'volume-down'} size={48} color={mute ? '#F9312A' : iconColor} onPress={() => setMute(!mute)}/>
            <View style={[styles.barVolumen, {backgroundColor: bgBarPlayer}]}>
                <View style={[styles.progressVolumen, {width: `${mute ? 0 : value}%`}]} />
                <View style={styles.circleIndicator} />
            </View>
        </View>
    )
}

const Caratula = ({
    theme, value,data
}) => {
    return (
        <ImageBackground style={styles.contentCaratula} source={{uri: data.album}} resizeMode='cover' blurRadius={3} defaultSource={{uri: require("../../assets/albums/with-out-face.png")}}>
            <View style={[styles.contentOverlay, {backgroundColor: theme.overlayCaratula}]}>
                <Image style={styles.album} source={{uri: data.album}} resizeMode='cover' defaultSource={{uri: require("../../assets/albums/with-out-face.png")}}/>
                <Volumen iconColor={theme.iconVolumen} value={value} bgBarPlayer={theme.bgBarPlayer}/>
            </View>
        </ImageBackground>
    );
}

const styles = {
    contentCaratula: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: "100%",
        height: 500,
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -10
    },
    contentOverlay:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        height: 500
    },
    album:{
        width: 300,
        height: 300,
        marginBottom: 30,
        marginTop: 60,
    },
    contentVolumen:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    barVolumen:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: 200,
        height: 4,
        borderRadius: 2,
    },
    progressVolumen: {
        height: 4,
        borderRadius: 2,
        backgroundColor: '#0074D9',
    },
    circleIndicator:{
        width: 8,
        height: 8,
        backgroundColor: "#FFDC00",
        boxShadow: "0 0 0.25 0.25 #111111",
        borderRadius: 50,
    }
}

export default Caratula;
