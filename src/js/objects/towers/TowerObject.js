export default class Tower extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, damage, range, speed) {
        super(scene, x, y, texture);

        this.damage = damage || 100;
        this.range = range || 200;
        this.speed = speed || 5000;
        this.canAttack = true;

        // Graphics to draw the range
        this.rangeGraphics = scene.add.graphics({ lineStyle: {width: 1, color:"#ff0000"} });
        this.drawRange();

        scene.add.existing(this);
    }

    drawRange() {
        this.rangeGraphics.clear(); // Clear previous drawings
        this.rangeGraphics.strokeCircle(this.x, this.y, this.range);
    }

    enemyInRange(zombie) {
        const distance = Phaser.Math.Distance.Between(this.x, this.y, zombie.x, zombie.y);
        return distance <= this.range;
    }

    attack(zombies) {
        if (this.canAttack) {
            
            console.log("shoot");

            // attack delay
            this.canAttack = false;
            
            let closestZombie = null;
            let closestDistance = Infinity;

            for (const zombie of zombies) {
                if (this.enemyInRange(zombie)) {
                    const distance = Phaser.Math.Distance.Between(this.x, this.y, zombie.x, zombie.y);
                    if (distance < closestDistance) {
                        closestZombie = zombie;
                        closestDistance = distance;
                    }
                }
            }

            if (closestZombie) {
                closestZombie.reduceHealth(this.damage);
            }

            setTimeout(() => {
                this.canAttack = true;
            }, this.speed);
        }
     }
}