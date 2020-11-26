import React, { Component } from 'react'
import { View } from 'react-native';

import GameView from '../view/GamesView'
import LoadingView from '../view/LoadingView';
import Repository from '../Repositories/GameRepository'
import IGame from '../models/interfaces/IGame';

interface GameProps {
}
  
interface GameState{
    loading: boolean,
    showGameList: boolean,
    data: IGame[]
}

export default class GameComponent extends Component<GameProps, GameState>{
    repo: Repository;

    constructor(prop: any){
        super(prop)
        this.state = {
            loading: true,
            showGameList: false,
            data: []
        }
        this.repo = new Repository()
    }

    async componentDidMount(){
        let data: IGame[] = await this.repo.GetAllAsync();
        this.setState({loading: false, showGameList: true, data: data});
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

