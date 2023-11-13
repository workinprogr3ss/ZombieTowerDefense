export default class EnemyCountManager {
    constructor(scene) {
        this.scene = scene;
        this.currentEnemyCount = 0;
    }

    addEnemy(amount) {
        this.currentEnemyCount += amount;
        this.updateEnemyCountDisplay();
    }

    reduceEnemy(amount) {
        this.currentEnemyCount -= amount;
        this.currentEnemyCount = Math.max(this.currentEnemyCount, 0); // Prevents enemy count from going below 0
        this.updateEnemyCountDisplay();
    }

    updateEnemyCountDisplay() {
        this.scene.events.emit('updateEnemyCountDisplay', this.currentEnemyCount);
    }
}