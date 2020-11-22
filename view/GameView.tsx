import React, { Component } from 'react'
import { View, Text, Button, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';

import Repository from '../Repositories/GameRepository'

const repo = new Repository();

const GameView = (props: { data: any; loading: any; }) => {
    var { data, loading } = props
    
    if (loading) {
        data = repo.GetAll()
    }

    return (
        <View>
            <FlatList
                data={data}
                // ItemSeparatorComponent={FlatListItemSeparator}
                renderItem={item => renderItem(item)}
                keyExtractor={item => item.id.toString()}
            />
            {loading &&
                <View>
                    <ActivityIndicator size="large" color="#0c9" />
                    <Text>Loading Data</Text>
                </View>
            }
        </View>
    )
}

var renderItem = (data: any) => {
    return (
        <TouchableOpacity >
            <Text>{data.item.name}</Text>
            <Text>{data.item.email}</Text>
            <Text>{data.item.company.name}</Text>
        </TouchableOpacity>
    )
}

export default GameView;