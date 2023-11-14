export default class WaveTimerManager {
    constructor(scene) {
        this.scene = scene;
        this.waveTimer = 0;
    }

    addTime(amount) {
        this.waveTimer += amount;
        this.updateWaveTimerDisplay();
    }

    reduceTime(amount) {
        this.waveTimer -= amount;
        this.waveTimer = Math.max(this.waveTimer, 0); // Prevents wave timer from going below 0
        this.updateWaveTimerDisplay();
    }

    updateWaveTimerDisplay() {
        this.scene.events.emit('updateWaveTimerDisplay', this.waveTimer);
    }
}
