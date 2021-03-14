import React from 'react';
import { Text, View } from 'react-native';
import ItemList from './ItemList';
import fonts from '../../lib/fonts';

const ListHome = ({
    data, theme, navigation
}) => (
    <View style={styles.contentList}>
        <Text style={[{...fonts.title, color: theme.titleList}]}>Lista</Text>
        {data.map((item)=>{
            return <ItemList data={item} theme={theme} navigation={navigation}/>
        })}
    </View>
);

const styles = {
    contentList: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        top: 86,
        with: "100%",
    }
}

export default ListHome;
