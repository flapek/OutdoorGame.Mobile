import Waypoint from './Waypoint'
import IGame from './interfaces/IGame'
import IWaypoint from './interfaces/IWaypoint';
 
export default class Game implements IGame{
    id: string;
    name: string;    
    questionId: string[];
    waypoints: IWaypoint[];

    constructor({ id, name, questionId, waypoints }: { id: string; name: string; questionId: string[]; waypoints: Waypoint[] }) {
        this.id = id;
        this.name = name;
        this.questionId = questionId;
        this.waypoints = waypoints;
    }
}