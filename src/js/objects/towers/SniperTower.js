import Tower from './TowerObject.js';

export default class SniperTower extends Tower {
    constructor(scene, x, y, audioManager) {
        //(scene, x, y, texture, damage, range, speed)
        // speed is the delay between attacks in milliseconds
        super(scene, x, y, 'sniper_tower_1', 'sniper_projectile', 40, 150, 2500, audioManager).setOrigin(0.5, 0.8);

        this.damageUpgradeVal = 5;
        this.damageUpgradeCost = 50;
        this.attackSpeedUpgradeVal = 500;
        this.attackSpeedUpgradeCost = 150;
        this.rangeUpgradeVal = 20;
        this.rangeUpgradeCost = 100;

        this.damageUpgradeNum = 0;
        this.attackSpeedUpgradeNum = 0;
        this.rangeUpgradeNum = 0;

        this.maxDamageUpgradeNum = 3;
        this.maxAttackSpeedUpgradeNum = 3;
        this.maxRangeUpgradeNum = 3;

        // Store upgrade menu coordinates
        this.upgradeMenuX = this.x;
        this.upgradeMenuY = this.y;

        // Adjust upgrade menu coordinates based on object position on screen so that it doesn't go off screen but do not move object
        if (this.x < 100) {
            this.upgradeMenuX = 125;
        }
        else if (this.x > 700) {
            this.upgradeMenuX = 700;
        }
        if (this.y < 100) {
            this.upgradeMenuY = 100;
        }
        else if (this.y > 500) {
            this.upgradeMenuY = 500;
        }

        // Upgrade tower menu
        this.on('pointerdown', () => {
            const popUpMenu = scene.add.group();
            scene.upgradeMenuGroup.push(popUpMenu);

            if (scene.upgradeMenuGroup) {
                //console.log(scene.upgradeMenuGroup)
                scene.upgradeMenuGroup.forEach(group => {
                    group.setVisible(false);
                });
            }

            popUpMenu.setVisible(false);

            //Upgrade Menu
            const UpgradeMenu = scene.add.image(this.upgradeMenuX, this.upgradeMenuY, 'UpgradeMenu').setOrigin(0.5).setAlpha(0.6).setDepth(3);
            const Upgrade_Damage = scene.add.image(this.upgradeMenuX - 120, this.upgradeMenuY - 48, 'Upgrade_Damage').setOrigin(0).setAlpha(0.6).setInteractive({cursor: 'pointer'}).setDepth(3);
            const Upgrade_AttackSpeed = scene.add.image(this.upgradeMenuX - 120, this.upgradeMenuY - 16, 'Upgrade_AttackSpeed').setOrigin(0).setAlpha(0.6).setInteractive({cursor: 'pointer'}).setDepth(3);
            const Upgrade_Range = scene.add.image(this.upgradeMenuX - 120, this.upgradeMenuY + 16, 'Upgrade_Range').setOrigin(0).setAlpha(0.6).setInteractive({cursor: 'pointer'}).setDepth(3);
            const UpgradeMenu_Cancel = scene.add.image(this.upgradeMenuX + 88, this.upgradeMenuY - 16, 'UpgradeMenu_Cancel').setOrigin(0).setAlpha(0.6).setInteractive({cursor: 'pointer'}).setDepth(3);

            const upgrade_damage_text = scene.add.text(this.upgradeMenuX - 80, this.upgradeMenuY - 32, `+${this.damageUpgradeVal} Damage`, {fill: '#000000'}).setOrigin(0, 0.5).setDepth(3);
            const upgrade_attackSpeed_text = scene.add.text(this.upgradeMenuX - 80, this.upgradeMenuY, `+${this.attackSpeedUpgradeVal} Speed`, {fill: '#000000'}).setOrigin(0, 0.5).setDepth(3);
            const upgrade_range_text = scene.add.text(this.upgradeMenuX - 80, this.upgradeMenuY + 32, `+${this.rangeUpgradeVal} Range`, {fill: '#000000'}).setOrigin(0, 0.5).setDepth(3);

            const upgrade_damage_cost = scene.add.text(this.upgradeMenuX + 48, this.upgradeMenuY - 32, `$${this.damageUpgradeCost}`, {fill: '#000000'}).setOrigin(0.5).setDepth(3);
            const upgrade_attackSpeed_cost = scene.add.text(this.upgradeMenuX + 48, this.upgradeMenuY, `$${this.attackSpeedUpgradeCost}`, {fill: '#000000'}).setOrigin(0.5).setDepth(3);
            const upgrade_range_cost = scene.add.text(this.upgradeMenuX + 48, this.upgradeMenuY + 32, `$${this.rangeUpgradeCost}`, {fill: '#000000'}).setOrigin(0.5).setDepth(3);

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
                if (this.damageUpgradeNum < this.maxDamageUpgradeNum && scene.displayManager.playerCurrencyManager.currentCurrency >= this.damageUpgradeCost) {
                    this.damage += this.damageUpgradeVal;
                    this.damageUpgradeNum += 1;
                    scene.add.image(this.x + 24 + (this.damageUpgradeNum * 8), this.y - 16, 'DamageIcon').setOrigin(0.5).setScale(0.7).setDepth(0);
                    scene.displayManager.playerCurrencyManager.currentCurrency -= this.damageUpgradeCost;
                    scene.events.emit('updateCurrencyDisplay', scene.displayManager.playerCurrencyManager.currentCurrency);
                }
                popUpMenu.setVisible(false);
            });

            // Increase speeds
            Upgrade_AttackSpeed.on('pointerdown', () => {
                if (this.attackSpeedUpgradeNum < this.maxAttackSpeedUpgradeNum && scene.displayManager.playerCurrencyManager.currentCurrency >= this.attackSpeedUpgradeCost) {
                    this.speed -= this.attackSpeedUpgradeVal;
                    this.attackSpeedUpgradeNum += 1;
                    scene.add.image(this.x + 24 + (this.attackSpeedUpgradeNum * 8), this.y, 'AttackSpeedIcon').setOrigin(0.5).setScale(0.6).setDepth(0);
                    scene.displayManager.playerCurrencyManager.currentCurrency -= this.attackSpeedUpgradeCost;
                    scene.events.emit('updateCurrencyDisplay', scene.displayManager.playerCurrencyManager.currentCurrency);
                }
                popUpMenu.setVisible(false);
            });

            // Increase range
            Upgrade_Range.on('pointerdown', () => {
                if (this.rangeUpgradeNum < this.maxRangeUpgradeNum && scene.displayManager.playerCurrencyManager.currentCurrency >= this.rangeUpgradeCost) {
                    this.range += this.rangeUpgradeVal;
                    this.rangeUpgradeNum += 1;
                    scene.add.image(this.x + 24 + (this.rangeUpgradeNum * 8), this.y + 16, 'RangeIcon').setOrigin(0.5).setScale(0.6).setDepth(0);
                    scene.displayManager.playerCurrencyManager.currentCurrency -= this.rangeUpgradeCost;
                    scene.events.emit('updateCurrencyDisplay', scene.displayManager.playerCurrencyManager.currentCurrency);
                }
                popUpMenu.setVisible(false);
            });

            UpgradeMenu_Cancel.on('pointerdown', () => {
                popUpMenu.setVisible(false);
            });
        });
    }
}