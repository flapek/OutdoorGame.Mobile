import Game from "../models/Game";


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
}
