import Waypoint from './Waypoint'
import IGame from './interfaces/IGame'
import IWaypoint from './interfaces/IWaypoint';

class Game implements IGame{
    id: string;
    name: string;    
    questionId: string[];
    waypoints: IWaypoint[];

    constructor(id:string, name:string, questionId: string[], waypoints: Waypoint[]) {
        this.id = id;
        this.name = name;
        this.questionId = questionId;
        this.waypoints = waypoints;
    }
    
    setId(id: string){
        this.id = id;
    }


    setName(name: string){
        this.name = name;
    }

    
    setQuestionId(questionId: string[]){
        this.questionId = questionId;
    }

    
    setWaypoints(waypoints: Waypoint[]){
        this.waypoints = waypoints;
    }
}
export default Game;