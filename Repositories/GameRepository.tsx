import Game from "../models/Game";
import IGame from "../models/interfaces/IGame";

export default class GameRepository {    
    private apiUrl = 'http://localhost:10000/api/';

    constructor(){
    }

    async GetAllAsync(): Promise<Game[]> {
        var apiCall = await fetch(this.apiUrl + "Game");
        var response: Promise<Game[]> = await apiCall.json();
        console.log(response);
        return response;
    }

    GetAll(): IGame[] {
        let result: IGame[] = [];
        fetch(this.apiUrl + "Game")
        .then(response => response.json())
        .then(data =>
            result.push(new Game(
                {
                    id: data.id,
                    name: data.name,
                    questionId: data.questionId,
                    waypoints: data.waypoints
                }))        
        )
        .catch(error => console.log(error));

        return result;
    }

}
