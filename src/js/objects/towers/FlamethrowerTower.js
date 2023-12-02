import Tower from './TowerObject.js';
import Projectile from './Projectile.js';

export default class FlamethrowerTower extends Tower {
    constructor(scene, x, y) {
        // (scene, x, y, texture, damage, range, speed)
        // speed is the delay between attacks in milliseconds
        super(scene, x, y, 'flame_tower_1', 'flame_projectile', 0.5, 100, 500);

        this.damageUpgrade = 0;
        this.attackSpeedUpgrade = 0;
        this.rangeUpgrade = 0;

        // Upgrade tower menu
        this.on('pointerdown', () => {
            const popUpMenu = scene.add.group();
            scene.upgradeMenuGroup.push(popUpMenu);

            scene.upgradeMenuGroup.forEach(group => {
                group.setVisible(false);
            });

            popUpMenu.setVisible(false);

            //Upgrade Menu
            const UpgradeMenu = scene.add.image(this.x, this.y, 'UpgradeMenu').setOrigin(0.5).setAlpha(0.6).setDepth(3);
            const Upgrade_Damage = scene.add.image(this.x - 120, this.y - 48, 'Upgrade_Damage').setOrigin(0).setAlpha(0.6).setInteractive({cursor: 'pointer'}).setDepth(3);
            const Upgrade_AttackSpeed = scene.add.image(this.x - 120, this.y - 16, 'Upgrade_AttackSpeed').setOrigin(0).setAlpha(0.6).setInteractive({cursor: 'pointer'}).setDepth(3);
            const Upgrade_Range = scene.add.image(this.x - 120, this.y  + 16, 'Upgrade_Range').setOrigin(0).setAlpha(0.6).setInteractive({cursor: 'pointer'}).setDepth(3);
            const UpgradeMenu_Cancel = scene.add.image(this.x + 88, this.y - 16, 'UpgradeMenu_Cancel').setOrigin(0).setAlpha(0.6).setInteractive({cursor: 'pointer'}).setDepth(3);

            const upgrade_damage_text = scene.add.text(this.x - 80, this.y - 32, '+5 Damage', {fill: '#000000'}).setOrigin(0, 0.5).setDepth(3);
            const upgrade_attackSpeed_text = scene.add.text(this.x - 80, this.y, '+100 Speed', {fill: '#000000'}).setOrigin(0, 0.5).setDepth(3);
            const upgrade_range_text = scene.add.text(this.x - 80, this.y + 32, '+20 Range', {fill: '#000000'}).setOrigin(0, 0.5).setDepth(3);

            const upgrade_damage_cost = scene.add.text(this.x + 48, this.y - 32, '$50', {fill: '#000000'}).setOrigin(0.5).setDepth(3);
            const upgrade_attackSpeed_cost = scene.add.text(this.x + 48, this.y, '$150', {fill: '#000000'}).setOrigin(0.5).setDepth(3);
            const upgrade_range_cost = scene.add.text(this.x + 48, this.y + 32, '$100', {fill: '#000000'}).setOrigin(0.5).setDepth(3);

            popUpMenu.add(UpgradeMenu);
            popUpMenu.add(Upgrade_Damage);
            popUpMenu.add(Upgrade_AttackSpeed);
            popUpMenu.add(Upgrade_Range);
            popUpMenu.add(UpgradeMenu_Cancel);
            popUpMenu.add(upgrade_damage_text);
            popUpMenu.add(Upgrade_AttackSpeed);
            popUpMenu.add(upgrade_attackSpeed_text);
            popUpMenu.add(upgrade_range_text);
            popUpMenu.add(upgrade_damage_cost);
            popUpMenu.add(upgrade_attackSpeed_cost);
            popUpMenu.add(upgrade_range_cost);
            
            popUpMenu.setVisible(true);

            // Increase damage
            Upgrade_Damage.on('pointerdown', () => {
                this.damage += 5;
                popUpMenu.setVisible(false);
                scene.add.image(this.x + 24 + (this.damageUpgrade * 8), this.y - 16, 'DamageIcon').setOrigin(0.5).setScale(0.7).setDepth(0);
                this.damageUpgrade += 1;
            });

            // Increase range
            Upgrade_AttackSpeed.on('pointerdown', () => {
                this.range += 10;
                popUpMenu.setVisible(false);
                scene.add.image(this.x + 24 + (this.attackSpeedUpgrade * 8), this.y, 'AttackSpeedIcon').setOrigin(0.5).setScale(0.6).setDepth(0);
                this.attackSpeedUpgrade += 1;
            });

            // Increase speed
            Upgrade_Range.on('pointerdown', () => {
                this.speed -= 500;
                popUpMenu.setVisible(false);
                scene.add.image(this.x + 24 + (this.rangeUpgrade * 8), this.y + 16, 'RangeIcon').setOrigin(0.5).setScale(0.6).setDepth(0);
                this.rangeUpgrade += 1;
            });

            UpgradeMenu_Cancel.on('pointerdown', () => {
                popUpMenu.setVisible(false);
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
                
                // Gives zombie burn status
                closestZombie.burn = true;
                closestZombie.burnDamage = this.damage;
            }

            setTimeout(() => {
                this.canAttack = true;
            }, this.speed);
        }
    }
}