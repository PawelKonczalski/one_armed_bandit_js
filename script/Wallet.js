class Wallet {

    constructor(money) {
        let _money = money;

        this.getWalletValue = () => _money;

        this.checkCanPlay = value => {
            return money >= value;
        };

        this.changeWallet = (value, type = '+') => {
            if (typeof value === "number" && !isNaN(value)) {
                if (type === '+') {
                    return _money += value;
                } else if (type === '-' && _money >= value) {
                    return _money -= value;
                } else {
                    throw  new Error("invalid activity type")
                }
            }
        }
    }


}