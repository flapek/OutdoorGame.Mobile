import React, { Component } from 'react'
import { View, Text, Button, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';

import GameView from '../view/GameView'
import LoadingView from '../view/LoadingView';
import Repository from '../Repositories/GameRepository'
import IGame from '../models/interfaces/IGame';

interface GameProps {
}
  
interface GameState{
    loading: boolean,
    data: IGame[]
}

export default class GameComponent extends Component<GameProps, GameState>{
    repo: Repository;

    constructor(prop: any){
        super(prop)
        this.state = {
            loading: true,
            data: []
        }
        this.repo = new Repository()
    }

    async componentDidMount(){
        let data: IGame[] = this.repo.GetAll();
        this.setState({loading: false, data: data});
    }

    render() {
        return (
            <View>
                <GameView data={this.state.data}/>
                {this.state.loading && <LoadingView/>}
            </View>
        )
    }

}

