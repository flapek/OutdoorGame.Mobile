import Waypoint from './Waypoint'

class Game {
    id: string;
    name: string;    
    questionId: string[];
    waypoints: Waypoint[]

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