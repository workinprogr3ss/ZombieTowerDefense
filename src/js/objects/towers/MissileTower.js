import Tower from './TowerObject.js';
import Projectile from './Projectile.js';

export default class MissileTower extends Tower {
    constructor(scene, x, y) {
        //(scene, x, y, texture, damage, range, speed)
        // speed is the delay between attacks in milliseconds
        super(scene, x, y, 'missile_tower_1', 'missile_projectile', 10, 150, 5000);

        // Upgrade tower menu
        this.on('pointerdown', () => {
            this.setVisible(false);
            const popUpMenu = scene.add.group();
            popUpMenu.setVisible(false);

            const menuBackground = scene.add.rectangle(this.x, this.y, 260, 120, 0x333333);
            popUpMenu.add(menuBackground);
            menuBackground.setDepth(0);
            menuBackground.setAlpha(0.5);

            const menuItem1 = scene.add.text(this.x - 125, this.y - 55, '+5 Damage - $50', {fill: '#ffffff'});
            const menuItem2 = scene.add.text(this.x - 125, this.y - 25, '+10 Range - $50', {fill: '#ffffff'});
            const menuItem3 = scene.add.text(this.x - 125, this.y + 5, '+500 Speed - $50', {fill: '#ffffff'});
            const menuExit = scene.add.text(this.x - 125, this.y + 35, 'Cancel   Cancel   Cancel', {fill: '#ffffff'});

            popUpMenu.add(menuItem1);
            popUpMenu.add(menuItem2);
            popUpMenu.add(menuItem3);
            popUpMenu.add(menuExit);
    
            menuItem1.setInteractive();
            menuItem2.setInteractive();
            menuItem3.setInteractive();
            menuExit.setInteractive();
    
            popUpMenu.setVisible(true);

            // Increase damage
            menuItem1.on('pointerdown', () => {
                this.damage += 5;
                popUpMenu.setVisible(false);
                this.setVisible(true);
            });

            // Increase range
            menuItem2.on('pointerdown', () => {
                this.range += 10;
                popUpMenu.setVisible(false);
                this.setVisible(true);
            });

            // Increase speed
            menuItem3.on('pointerdown', () => {
                this.speed -= 500;
                popUpMenu.setVisible(false);
                this.setVisible(true);
            });

            menuExit.on('pointerdown', () => {
                popUpMenu.setVisible(false);
                this.setVisible(true);
            });
        });
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
                this.scene.audioManager.playTowerShootAudio(this.towerType);
                this.scene.audioManager.playZombieHitAudio();

                // aoe damage
                this.damageOtherZombies(closestZombie, zombies);
            }

            setTimeout(() => {
                this.canAttack = true;
            }, this.speed);
        }
    }

    otherZombieInRangeOfZombie(zombie, otherZombie) {
        const distance = Phaser.Math.Distance.Between(zombie.x, zombie.y, otherZombie.x, otherZombie.y);
        // hits other zombies in this range
        return distance <= 50;
    }

    damageOtherZombies(zombie, zombies) {
        for (const otherZombie of zombies) {
            if (this.otherZombieInRangeOfZombie(zombie, otherZombie)) {
                otherZombie.reduceHealth(this.damage);
            }
        }
    }

}