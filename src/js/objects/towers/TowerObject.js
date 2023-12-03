import Projectile from "./Projectile.js";

export default class Tower extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, projectileTexture, damage, range, speed, audioManager) {
        super(scene, x, y, texture);

        this.audioManager = audioManager;

        this.x = x;
        this.y = y;
        this.damage = damage || 100;
        this.range = range || 200;
        this.speed = speed || 5000;
        this.canAttack = true;

        this.rangeGraphics;
        this.projectileTexture = projectileTexture;
        this.towerType = this.checkTowerType();

        scene.add.existing(this);

        this.setInteractive();

        // Shows tower range
        this.on('pointerover', () => {
            this.drawRange(scene);
            this.damageIcon = scene.add.image(this.x - 24, this.y + 32, 'DamageIcon').setOrigin(0.5).setScale(0.7);
            this.damageText = scene.add.text(this.x - 16, this.y + 32, this.damage).setOrigin(0, 0.5);
            this.attackSpeedIcon = scene.add.image(this.x - 24, this.y + 48, 'AttackSpeedIcon').setOrigin(0.5).setScale(0.7);
            this.attackSpeedText = scene.add.text(this.x - 16, this.y + 48, this.speed).setOrigin(0, 0.5);
            this.rangeIcon = scene.add.image(this.x - 24, this.y + 64, 'RangeIcon').setOrigin(0.5).setScale(0.7);
            this.rangeText = scene.add.text(this.x - 16, this.y + 64, this.range).setOrigin(0, 0.5);
        });
        this.on('pointerout', () => {
            this.rangeGraphics.destroy();
            this.damageIcon.destroy();
            this.damageText.destroy();
            this.attackSpeedIcon.destroy();
            this.attackSpeedText.destroy();
            this.rangeIcon.destroy();
            this.rangeText.destroy();
        });
    }

    drawRange(scene) {
        // Graphics to draw the range
        this.rangeGraphics = scene.add.graphics();
        this.rangeGraphics.fillStyle(0xffffff, 1);
        this.rangeGraphics.fillCircle(this.x, this.y, this.range);
        
        // Make the range transluscent 
        this.rangeGraphics.setAlpha(0.1);
    }

    enemyInRange(zombie) {
        const distance = Phaser.Math.Distance.Between(this.x, this.y, zombie.x, zombie.y);
        return distance <= this.range;
    }

    attack(zombies) {
        if (this.canAttack) {
            // attack delay
            this.canAttack = false;
            
            // find closest zombie
            const closestZombie = this.findClosetZombie(zombies);

            // create projectile
            if (closestZombie) {
                let projectile = new Projectile(this.scene, this.x, this.y, closestZombie.x, closestZombie.y, this.projectileTexture);
                projectile.fire(this.x, this.y, closestZombie.x, closestZombie.y);
                closestZombie.reduceHealth(this.damage);
                // play audio
                this.audioManager.playTowerShootAudio(this.towerType);
                this.audioManager.playZombieHitAudio();
            }

            setTimeout(() => {
                this.canAttack = true;
            }, this.speed);
        }

    }

    rotateTower(zombie) {
        let targetX = zombie.x;
        let targetY = zombie.y;

        // Calculate the angle towards the target
        let angle = Phaser.Math.Angle.Between(this.x, this.y, targetX, targetY);

        // Set the turret roation to face the target
        const offset = Math.PI / 2;
        this.rotation = angle + offset;
    }

    findClosetZombie(zombies) {
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

        return closestZombie;
    }

    update() { 
        let closestZombie = this.findClosetZombie(this.scene.zombies.children.entries);
        if (closestZombie) {
            this.rotateTower(closestZombie);
        }
    }

    checkTowerType() {
        if (this.texture.key == 'missile_tower_1'){
            //console.log("missile tower")
            return 'missile';
        }
        else if (this.texture.key == 'sniper_tower_1'){
            //console.log('sniper tower')
            return 'sniper';
        } 
        else if (this.texture.key == 'flame_tower_1') {
            //console.log('flame tower')
            return 'flame'; 
        }
    }
}