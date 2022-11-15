const team = {
    _players: [
        {firstName: 'Ariana', lastName: 'Grande', age: 29},
        {firstName: 'Katy', lastName: 'Perry', age: 37}, 
        {firstName: 'Taylor', lastName: 'Swift', age: 32}
    ],
    _games: [
        {opponent: 'Swift Boys', teamPoints: 2, opponentPoints: 0},
        {opponent: 'B&A Boys', teamPoints: 0 , opponentPoints: 0},
        {opponent: 'Swift Girls', teamPoints: 1 , opponentPoints: 5}
    ],

    get players() {
        return this._players;
    },

    get games() {
        return this._games;
    },

    addPlayer(newFirstName, newLastName, newAge) {
        let player = {
            firstName: newFirstName,
            lastName: newLastName,
            age: newAge
        };
        this._players.push(player);
    },

    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        let game = {
            opponent: newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints: newOpponentPoints
        };
        this._games.push(game);
    }
};

team.addPlayer('Iggy', 'Azalea', 32);
console.log(team.players);

team.addGame('Titans', 100, 98);
console.log(team.games);
