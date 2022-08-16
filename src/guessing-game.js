class GuessingGame {
    constructor() { }test


    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        let k = Math.round((this.max + this.min) / 2);
        return k;
    }

    lower() {
       this.max = this.guess();
    }

    greater() {
       this.min = this.guess();
    }
}

module.exports = GuessingGame;
