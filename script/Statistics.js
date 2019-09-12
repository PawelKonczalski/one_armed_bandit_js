class Statistics {

    constructor() {
        this.gameResult = [];
    }

    addGameToStatistics(win, bid) {
        let gameResult = {
            win: win,
            bid: bid
        };
        this.gameResult.push(gameResult)
    };

    showGameStatistic() {
        let games = this.gameResult.length;
        let wins = this.gameResult.filter(result => result.win).length;
        let losses = this.gameResult.filter(result => !result.win).length;
        return [games, wins, losses];
    }
}

