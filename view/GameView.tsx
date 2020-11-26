import React from 'react'
import { View, Text, FlatList, TouchableOpacity, ListRenderItemInfo } from 'react-native';
import IGame from '../models/interfaces/IGame';

export default function GameView({ data } : {data: IGame[]}): JSX.Element {
    console.log("Data size", data.length)

    return (
        <View>
            <Text></Text>
            <FlatList
                data={data}
                ItemSeparatorComponent={() => ( <View></View> )}
                renderItem={({ item }) => (
                    <Text>{ item }</Text>
                )}
                keyExtractor={item => item.id.toString()} />
        </View>
    );
}

function renderItem(item: IGame): JSX.Element{
    return (
        <TouchableOpacity>
            <Text>{item.id}</Text>
            <Text>{item.name}</Text>
        </TouchableOpacity>
    );
}
