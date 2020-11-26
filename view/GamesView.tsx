import React, { Fragment } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

import IGame from '../models/interfaces/IGame';
import Layout from '../constants/Layout'

export default function GameView({ data } : {data: IGame[]}): JSX.Element {
    return (
        <View style={styles.ListContainer}>
            <FlatList
                data={data}
                ItemSeparatorComponent={() => ( <View></View> )}
                renderItem={({ item }) => renderItem(item)}
                keyExtractor={item => item.id.toString()} />
        </View>
    );
}

function renderItem(item: IGame): JSX.Element{
    return (
        <TouchableOpacity style={styles.Item}>
            <Text style={styles.ItemText}>{item.name}</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    ListContainer:{
        justifyContent: "center",
        paddingHorizontal: 10,
        flex: 1
    },
    Item: {
        alignItems: "center",
        backgroundColor: "#DDD",
        padding: 10,
        width: Layout.window.width - 20,
        flexDirection: "row",
        margin: 5
    },
    ItemText: {
        fontSize: 20,
        fontfamily: "arial",
        fontWeight: "600"
    }
})