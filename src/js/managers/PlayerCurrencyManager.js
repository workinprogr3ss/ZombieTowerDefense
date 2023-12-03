export default class PlayerCurrencyManager {
    constructor(scene) {
        this.scene = scene;
        this.currentCurrency = 0;
        this.startingCurrency = 200;
    }

    addCurrency(amount) {
        this.currentCurrency += amount;
        this.updateCurrencyDisplay();
    }

    reduceCurrency(amount) {
        this.currentCurrency -= amount;
        this.currentCurrency = Math.max(this.currentCurrency, 0); // Prevents currency from going below 0
        this.updateCurrencyDisplay();
    }

    updateCurrencyDisplay() {
        this.scene.events.emit('updateCurrencyDisplay', this.currentCurrency);
    }
}