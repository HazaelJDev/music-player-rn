import React from 'react';
import { Text, View, Image, TouchableOpacity} from 'react-native';
import fonts from '../../lib/fonts';
import { MaterialIcons,} from '@expo/vector-icons';

const ItemList = ({
    data, theme, navigation,
    song,
    artist,
    duration,
    onAudioPress,
    isPlaying,
    activeListItem,
}) => {
    return (
        <TouchableOpacity style={styles.contentItem} key={data.key} onPress={() => {
            onAudioPress()
            navigation.navigate('Player')
        }}>
            <Image style={styles.album} source={{uri: data.album}} resizeMode='cover' defaultSource={{uri: require("../../assets/albums/with-out-face.png")}}/>
            <View style={[styles.contentMusic,{backgroundColor: activeListItem ? bgItemListActive : theme.bgItemList}]}>
                <View style={styles.dataSong}>
                    <Text numberOfLines={1} style={[{...fonts.subtitle}, {color: theme.textItemList}]}>{song}</Text>
                    <View style={styles.dataSongLastRow}>
                        <Text style={[{...fonts.body}, {color: theme.textItemList}]}>{artist}</Text>
                        <Text style={[{...fonts.body}, {color: theme.textItemList}]}>{duration}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
};

const styles = {
    contentItem:{
        width: "100%",
        height: 120,
        borderTopRightRadius: 16,
        borderBottomRightRadius: 16,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        marginBottom: 12,
    },
    contentMusic:{
        width: "65%",
        height: 120,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderTopRightRadius: 16,
        borderBottomRightRadius: 16,
        //El blur se tiene que agregar con una libreria o checar una forma nativa
    },
    dataSong:{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: 'space-around',
        paddingHorizontal: 20,
        width: 226,
        height: 82
    },
    dataSongLastRow:{
        display: "flex",
        flexDirection: "row",
        alignItems: "stretch",
        justifyContent: 'space-between',
        with: '70%'
    },
    album:{
        //Checar por que no funciona el border radius en la imagen 
        width: 120,
        height: 120,
    },
}

export default ItemList;
