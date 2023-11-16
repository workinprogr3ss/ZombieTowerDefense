export default class Projectile extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        scene.add.existing(this);
        this.speed = 500;
    }

    fire(targetX, targetY) {
        console.log("fire")

        //Move projectile to the target
        this.scene.physics.moveTo(this, targetX, targetY, this.speed);

        // Destroy projectile
        this.scene.time.delayedCall(2000, () => {
            this.destroy();
        });
    }
 }