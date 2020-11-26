import React from 'react'
import { View, Text, FlatList, TouchableOpacity, ListRenderItemInfo } from 'react-native';
import IGame from '../models/interfaces/IGame';

export default function GameView({ data } : {data: IGame[]}): JSX.Element {
    return (
        <View>
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
        <TouchableOpacity>
            <Text>{item.id}</Text>
            <Text>{item.name}</Text>
        </TouchableOpacity>
    );
}
