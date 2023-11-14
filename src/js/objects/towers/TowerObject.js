export default class Tower extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, damage, range, speed) {
        super(scene, x, y, texture);

        this.damage = damage || 100;
        this.range = range || 200;
        this.speed = speed || 1;

        scene.add.existing(this);
    }

    isWithinRange(tower, zombies) {
        for (const zombie of zombies) {
            const distance = Phaser.Math.Distance.Between(tower.x, target.y, zombie.x, zombie.y);

            if (distance <= range) {
                return true;
            }
        }
        return false;
    }

    attack() {
        if (this.isWithinRange(this, zombies)) {
            zombie.health -= this.damage;
        }
    }
}