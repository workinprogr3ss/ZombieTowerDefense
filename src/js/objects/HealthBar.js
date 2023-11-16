export default class HealthBar {
    constructor(scene, x, y, health) {
        this.bar = new Phaser.GameObjects.Graphics(scene);

        this.x = x;
        this.y = y;
        this.value = health;
        this.maxValue = health;
        this.p = 16 / this.maxValue;

        scene.add.existing(this.bar);
        this.draw();
    }

    draw() {
        this.bar.clear();

        //  BG
        this.bar.fillStyle(0x000000);
        this.bar.fillRect(this.x, this.y, 20, 8);

        //  Health
        this.bar.fillStyle(0xffffff);
        this.bar.fillRect(this.x + 2, this.y + 2, 16, 4);

        if (this.value < 30) {
            this.bar.fillStyle(0xff0000);
        }
        else {  
            this.bar.fillStyle(0x00ff00);
        }

        var d = Math.floor(this.p * this.value);

        this.bar.fillRect(this.x + 2, this.y + 2, d, 4);
    }

    updateHealth(health) {
        this.value = health;
        this.draw();
    }

    destroy() {
        this.bar.destroy();
    }
}