export default class ScoreManager {
    constructor(scene) {
        this.scene = scene;
        this.score = 0;
    }
    
    addScore(amount) {
        this.score += amount;
        this.updateScoreDisplay();
    }

    updateScoreDisplay() {
        this.scene.events.emit('updateScoreDisplay', this.score);
    }
}