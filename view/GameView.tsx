import React from 'react'
import { View, Text, FlatList, TouchableOpacity, ListRenderItemInfo } from 'react-native';
import Game from '../models/Game';
import IGame from '../models/interfaces/IGame';

function GameView(data: IGame[]): JSX.Element {
    return (
        <View>
            <FlatList
                data={data}
                // ItemSeparatorComponent={FlatListItemSeparator}
                renderItem={item => renderItem(item)}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

var renderItem = (data: ListRenderItemInfo<IGame>) => {
    return (
        <TouchableOpacity >
            <Text>{data.item.id}</Text>
            <Text>{data.item.name}</Text>
        </TouchableOpacity>
    )
}

export default GameView;
