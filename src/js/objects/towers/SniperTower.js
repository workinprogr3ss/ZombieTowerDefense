import Tower from './TowerObject.js';

export default class SniperTower extends Tower {
    constructor(scene, x, y) {
        //(scene, x, y, texture, damage, range, speed)
        // speed is the delay between attacks in milliseconds
        super(scene, x, y, 'sniper_tower_1', 'sniper_projectile', 10, 150, 2500).setOrigin(0.5, 0.8);

        this.damageUpgrade = 0;
        this.attackSpeedUpgrade = 0;
        this.rangeUpgrade = 0;

        // Upgrade tower menu
        this.on('pointerdown', () => {
            const popUpMenu = scene.add.group();
            scene.upgradeMenuGroup.push(popUpMenu);

            if (scene.upgradeMenuGroup) {
                console.log(scene.upgradeMenuGroup)
                scene.upgradeMenuGroup.forEach(group => {
                    group.setVisible(false);
                });
            }

            popUpMenu.setVisible(false);

            //Upgrade Menu
            const UpgradeMenu = scene.add.image(this.x, this.y, 'UpgradeMenu').setOrigin(0.5).setAlpha(0.6);
            const Upgrade_Damage = scene.add.image(this.x - 120, this.y - 48, 'Upgrade_Damage').setOrigin(0).setAlpha(0.6).setInteractive({cursor: 'pointer'});
            const Upgrade_AttackSpeed = scene.add.image(this.x - 120, this.y - 16, 'Upgrade_AttackSpeed').setOrigin(0).setAlpha(0.6).setInteractive({cursor: 'pointer'});
            const Upgrade_Range = scene.add.image(this.x - 120, this.y  + 16, 'Upgrade_Range').setOrigin(0).setAlpha(0.6).setInteractive({cursor: 'pointer'});
            const UpgradeMenu_Cancel = scene.add.image(this.x + 88, this.y - 16, 'UpgradeMenu_Cancel').setOrigin(0).setAlpha(0.6).setInteractive({cursor: 'pointer'});

            const upgrade_damage_text = scene.add.text(this.x - 80, this.y - 32, '+5 Damage', {fill: '#000000'}).setOrigin(0, 0.5);
            const upgrade_attackSpeed_text = scene.add.text(this.x - 80, this.y, '+20 Range', {fill: '#000000'}).setOrigin(0, 0.5);
            const upgrade_range_text = scene.add.text(this.x - 80, this.y + 32, '+100 Speed', {fill: '#000000'}).setOrigin(0, 0.5);

            const upgrade_damage_cost = scene.add.text(this.x + 48, this.y - 32, '$50', {fill: '#000000'}).setOrigin(0.5);
            const upgrade_attackSpeed_cost = scene.add.text(this.x + 48, this.y, '$100', {fill: '#000000'}).setOrigin(0.5);
            const upgrade_range_cost = scene.add.text(this.x + 48, this.y + 32, '$150', {fill: '#000000'}).setOrigin(0.5);

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
                scene.add.image(this.x + 24 + (this.damageUpgrade * 8), this.y - 16, 'DamageIcon').setOrigin(0.5).setScale(0.7);
                this.damageUpgrade += 1;
            });

            // Increase range
            Upgrade_AttackSpeed.on('pointerdown', () => {
                this.range += 20;
                popUpMenu.setVisible(false);
                scene.add.image(this.x + 24 + (this.attackSpeedUpgrade * 8), this.y, 'AttackSpeedIcon').setOrigin(0.5).setScale(0.6);
                this.attackSpeedUpgrade += 1;
            });

            // Increase speed
            Upgrade_Range.on('pointerdown', () => {
                this.speed -= 100;
                popUpMenu.setVisible(false);
                scene.add.image(this.x + 24 + (this.rangeUpgrade * 8), this.y + 16, 'RangeIcon').setOrigin(0.5).setScale(0.6);
                this.rangeUpgrade += 1;
            });

            UpgradeMenu_Cancel.on('pointerdown', () => {
                popUpMenu.setVisible(false);
            });
        });
    }
}