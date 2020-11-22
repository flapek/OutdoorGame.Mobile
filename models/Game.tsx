import Waypoint from './Waypoint'

class Game {
    id: string;
    name: string;    
    questionId: string[];
    waypoints: Waypoint[]

    constructor() {
        this.id = "",
        this.name = "",
        this.questionId = [],
        this.waypoints = []
    }
    
    GetWaypoint(){
    }
}
export default Game;