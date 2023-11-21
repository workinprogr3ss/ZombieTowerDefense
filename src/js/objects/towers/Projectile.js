export default class Projectile extends Phaser.GameObjects.Sprite {
    constructor(scene, originX, originY, targetX, targetY, texture) {
        super(scene, originX, originY, texture, 0);

        // Create Projectile Object
        scene.physics.add.existing(this);

        // Set Projectile Rotation
        this.angle = Phaser.Math.Angle.Between(originX, originY, targetX, targetY);
        this.offset = Math.PI / 2;
        this.setRotation(this.angle + this.offset);

        scene.sys.displayList.add(this);
        scene.sys.updateList.add(this);

        this.speed = 1500;
    }

    fire(towerX, towerY, zombieX, zombieY) {

        //Move projectile to the target
        this.scene.physics.moveTo(this, zombieX, zombieY, this.speed);

        //Calculate Zombie Distance from Tower
        let distance = Phaser.Math.Distance.Between(towerX, towerY, zombieX, zombieY);

        // Destroys Projectile after traversing distance to Zombie
        this.scene.time.delayedCall((distance/this.speed) * 1000, () => {
            //Stop Projectile
            this.body.stop();
            //Display Impact Animation
            for (let i = 1; i < 4; i++) {
                this.scene.time.delayedCall((50), () => this.setFrame(i));
            }
            //Destroy Projectile
            this.scene.time.delayedCall((100), () => this.destroy());
        });

    }
 }