import autoprefixer, { data } from 'autoprefixer';
import React from 'react';
import { Text, View } from 'react-native';
import fonts from '../../lib/fonts';

const SongData = ({
    data, theme
}) => {
    return (
        <View style={styles.contentSong}>
            <View style={styles.contentData}>
                <Text style={{...fonts.subtitle, color: theme.titlePlayer}}>{data.song}</Text>
                <Text style={{...fonts.body, color: theme.artistPlayer, marginTop: 8}}>{data.artist}</Text>
            </View>
            <ProgressBarSong textColor={theme.numPlayer} bgBarPlayer={theme.bgBarPlayer} />  
        </View>
    )
};

const styles = {
    contentSong: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        width: "80%",
        position: 'absolute',
        top: 516,
    },
    contentData: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        width: "100%",
        marginLeft: 20,
    },
    contentBarSong:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: "100%",
        height: 36,
        marginTop: 32,
        marginLeft: 20,
    },
    timesBarSong:{
       display: "flex",
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'space-between',
       width: "100%",
       marginTop: 4,
    },
    barSong:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 4,
        borderRadius: 2,
    },
    progressSong: {
        width: "70%",
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
    },
}   

const ProgressBarSong = ({textColor, bgBarPlayer}) => {
    return (
        <View style={styles.contentBarSong}>
            <View style={[styles.barSong, {backgroundColor: bgBarPlayer}]}>
                <View style={styles.progressSong} />
                <View style={styles.circleIndicator} />
            </View>
            <View style={styles.timesBarSong}>
                <Text style={{color: textColor}}>2:45</Text>
                <Text style={{color: textColor}}>4:35</Text>
            </View>
        </View>
    )    
}

export default SongData;
