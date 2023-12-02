import Tower from './TowerObject.js';
import Projectile from './Projectile.js';

export default class FlamethrowerTower extends Tower {
    constructor(scene, x, y) {
        // (scene, x, y, texture, damage, range, speed)
        // speed is the delay between attacks in milliseconds
        super(scene, x, y, 'flame_tower_1', 'flame_projectile', 0.5, 100, 500);

        this.damageUpgradeVal = 5;
        this.damageUpgradeCost = 50;
        this.attackSpeedUpgradeVal = 500;
        this.attackSpeedUpgradeCost = 150;
        this.rangeUpgradeVal = 20;
        this.rangeUpgradeCost = 100;

        this.damageUpgradeNum = 0;
        this.attackSpeedUpgradeNum = 0;
        this.rangeUpgradeNum = 0;

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

            const upgrade_damage_text = scene.add.text(this.x - 80, this.y - 32, `+${this.damageUpgradeVal} Damage`, {fill: '#000000'}).setOrigin(0, 0.5).setDepth(3);
            const upgrade_attackSpeed_text = scene.add.text(this.x - 80, this.y, `+${this.attackSpeedUpgradeVal} Speed`, {fill: '#000000'}).setOrigin(0, 0.5).setDepth(3);
            const upgrade_range_text = scene.add.text(this.x - 80, this.y + 32, `+${this.rangeUpgradeVal} Range`, {fill: '#000000'}).setOrigin(0, 0.5).setDepth(3);

            const upgrade_damage_cost = scene.add.text(this.x + 48, this.y - 32, `$${this.damageUpgradeCost}`, {fill: '#000000'}).setOrigin(0.5).setDepth(3);
            const upgrade_attackSpeed_cost = scene.add.text(this.x + 48, this.y, `$${this.attackSpeedUpgradeCost}`, {fill: '#000000'}).setOrigin(0.5).setDepth(3);
            const upgrade_range_cost = scene.add.text(this.x + 48, this.y + 32, `$${this.rangeUpgradeCost}`, {fill: '#000000'}).setOrigin(0.5).setDepth(3);

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
                this.damage += this.damageUpgradeVal;
                popUpMenu.setVisible(false);
                scene.add.image(this.x + 24 + (this.damageUpgradeNum * 8), this.y - 16, 'DamageIcon').setOrigin(0.5).setScale(0.7).setDepth(0);
                this.damageUpgradeNum += 1;
            });

            // Increase range
            Upgrade_AttackSpeed.on('pointerdown', () => {
                this.speed -= this.attackSpeedUpgradeVal;
                popUpMenu.setVisible(false);
                scene.add.image(this.x + 24 + (this.attackSpeedUpgradeNum * 8), this.y, 'AttackSpeedIcon').setOrigin(0.5).setScale(0.6).setDepth(0);
                this.attackSpeedUpgradeNum += 1;
            });

            // Increase speed
            Upgrade_Range.on('pointerdown', () => {
                this.range += this.rangeUpgradeVal;
                popUpMenu.setVisible(false);
                scene.add.image(this.x + 24 + (this.rangeUpgradeNum * 8), this.y + 16, 'RangeIcon').setOrigin(0.5).setScale(0.6).setDepth(0);
                this.rangeUpgradeNum += 1;
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