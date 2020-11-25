import Game from "../models/Game";

const apiUrl = 'http://localhost:10000/api/';

class GameRepository {

    constructor(){
    }

    async GetAllAsync(): Promise<Game[]> {
        var apiCall = await fetch(apiUrl + "Game");
        var response: Promise<Game[]> = await apiCall.json();
        return response;
    }
}

export default GameRepository;