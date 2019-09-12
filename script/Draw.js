class Draw {

    constructor() {
        this.options = ['img/1.png', 'img/2.png', 'img/3.png', 'img/4.png', 'img/5.png'];
        let _result = this.drawResult();
        this.getDrawResult = () => _result;
    }

    drawResult() {
        let symbols = [];
        for (let i = 0; i < this.options.length; i++) {
            const index = Math.floor(Math.random() * this.options.length);
            const symbol = this.options[index];
            symbols.push(symbol);
        }
        return symbols;
    }
}

