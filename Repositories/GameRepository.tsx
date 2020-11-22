const apiUrl = 'http://localhost:10000/api/';

class GameRepository {
    GetAll() {
        return fetch(apiUrl + "Game").then((response) => response.json()).then((data) => console.log('This is your data', data));
    }
}

export default GameRepository;