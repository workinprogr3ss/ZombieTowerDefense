export default class PlayerHealthManager {
    constructor(scene) {
        this.scene = scene;
        this.maxHealth = 1;
        this.currentHealth = this.maxHealth;
    }

    reducePlayerHealth(damage) {
        this.currentHealth -= damage;
        this.currentHealth = Math.max(this.currentHealth, 0); // Prevents health from going below 0
        this.updateHealthDisplay();
        if (this.currentHealth <= 0) {
            this.scene.scene.start('GameOverScene', {
                level: this.scene.scene.key,
                scene: this.scene
            });
        }
    }

    updateHealthDisplay() {
        this.scene.events.emit('updateHealthBar', this.currentHealth);
    }
}