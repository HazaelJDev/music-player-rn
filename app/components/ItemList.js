import React from 'react';
import { Text, View, Image, TouchableOpacity} from 'react-native';
import fonts from '../../lib/fonts';
import { MaterialIcons,} from '@expo/vector-icons';

const ItemList = ({
    data, theme, navigation
}) => {
    return (
        <TouchableOpacity style={styles.contentItem} key={data.key} onPress={() => navigation.navigate('Player')}>
            <Image style={styles.album} source={{uri: data.album}} resizeMode='cover' defaultSource={{uri: require("../../assets/albums/with-out-face.png")}}/>
            <View style={[styles.contentMusic,{backgroundColor:theme.bgItemList}]}>
                <View style={styles.dataSong}>
                    <Text style={[{...fonts.subtitle}, {color: theme.textItemList}]}>{data.song}</Text>
                    <Text style={[{...fonts.body}, {color: theme.textItemList}]}>{data.artist}</Text>
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
    album:{
        //Checar por que no funciona el border radius en la imagen 
        width: 120,
        height: 120,
    },
}

export default ItemList;
