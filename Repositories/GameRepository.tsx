import Game from "../models/Game";
import IGame from "../models/interfaces/IGame";

export default class GameRepository {    
    private apiUrl = 'http://localhost:10000/api/';

    constructor(){
    }

    async GetAllAsync(): Promise<Game[]> {
        var apiCall = await fetch(`${this.apiUrl}Game`);
        var response = await apiCall.json();
        var games: Game[] = []

        for (let index = 0; index < response.gamesDtos.length; index++) {
            const element = response.gamesDtos[index];
            games.push(new Game({id: element.id, name: element.name, questionId: [], waypoints: []}))
        }
        console.log(games)

        return games;
    }
}
