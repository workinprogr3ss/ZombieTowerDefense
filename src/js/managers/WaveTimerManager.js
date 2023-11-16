export default class WaveTimerManager {
    constructor(scene) {
        this.scene = scene;
        this.waveTimer = 30; // Starting time for each wave
    }

    // Unused
    addTime(amount) {
        this.waveTimer += amount;
        this.updateWaveTimerDisplay();
    }

    // Unused
    reduceTime(amount) {
        this.waveTimer -= amount;
        this.waveTimer = Math.max(this.waveTimer, 0); // Prevents wave timer from going below 0
        this.updateWaveTimerDisplay();
    }

    updateWaveTimerDisplay() {
        const formattedTime = ':'+`${this.waveTimer.toFixed(0)}`.padStart(2, '0');
        this.scene.events.emit('updateWaveTimerDisplay', formattedTime);
    }

    update(delta) {
        // Decrease teh waveTimer based on the delta time
        if (this.waveTimer > 0) {
            this.waveTimer -= delta / 1000;
            this.updateWaveTimerDisplay();
        }
    }

    resetTimer() {
        this.waveTimer = 30;
        this.updateWaveTimerDisplay();
    }
}
