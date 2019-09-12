class Game {

    constructor(startMoney) {
        this.stats = new Statistics();
        this.wallet = new Wallet(startMoney);

        document.getElementById('start').addEventListener('click', this.startGame.bind(this));

        this.spanWallet = document.querySelector('.panel span.wallet');
        this.symbols = [...document.querySelectorAll('div.symbol')];
        this.inputBid = document.getElementById('bet');
        this.spanResult = document.querySelector('.score span.result');
        this.spanGames = document.querySelector('.score span.number');
        this.spanWins = document.querySelector('.score span.win');
        this.spanLosses = document.querySelector('.score span.loss');

        this.render();
    }

    render(symbols = ['img/start.png', 'img/start.png', 'img/start.png'], money = this.wallet.getWalletValue(), result = '', stats = [0, 0, 0], bit = 0, wonMoney = 0) {
        this.symbols.forEach((symbol, index) => {
            symbol.style.backgroundImage = `url('${symbols[index]}')`;
        });

        this.spanWallet.textContent = money;
        if (result) {
            result = `Win ${wonMoney}$.`;
        } else if (!result && result !== '') {
            result = `Loss ${bit}$.`;
        }
        this.spanResult.textContent = result;
        this.spanGames.textContent = stats[0];
        this.spanWins.textContent = stats[1];
        this.spanLosses.textContent = stats[2];
    }

    startGame() {
        if (this.inputBid.value < 1) {
            return alert('To small amount of money');
        }

        const bid = Math.floor(this.inputBid.value);

        if (!this.wallet.checkCanPlay(bid)) {
            return alert('You have to small money for beat')
        }

        this.wallet.changeWallet(bid, '-');
        this.draw = new Draw();
        const symbols = this.draw.getDrawResult();
        const win = Result.checkWinner(symbols);
        const wonMoney = Result.moneyWinInGame(win, bid);
        this.wallet.changeWallet(wonMoney);
        this.stats.addGameToStatistics(win, bid);

        this.render(symbols, this.wallet.getWalletValue(), win, this.stats.showGameStatistic(), bid, wonMoney);

        if (this.wallet.getWalletValue() === 0) {
            document.body.style.fontSize = '80px';
            document.body.style.fontFamily = 'Arial';
            document.body.style.lineHeight = '100vh';
            document.body.style.textAlign = 'Center';
            document.body.style.color = 'red';
            document.body.textContent = "GAME OVER!!!";
        }

    }


}

