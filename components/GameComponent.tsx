import React, { Component } from 'react'
import { View, Text, Button, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';

import GameView from '../view/GameView'
import LoadingView from '../view/LoadingView';
import LoadinView from '../view/LoadingView'

const data: any = [];

export default class GameComponent extends Component{

    constructor(prop: any){
        super(prop)
        this.state = {
            loading: true,
            data: []
        }
    }


    render() {
        return (
            <View>
                <GameView data={data}/>
                (this.state.loading && <LoadingView/>)
            </View>
        )
    }
}

