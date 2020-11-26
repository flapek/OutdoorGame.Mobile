import IWaypoint from "./IWaypoint";

export default interface IGame {
    id: string;
    name: string;    
    questionId: string[];
    waypoints: IWaypoint[]
}
