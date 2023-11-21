import Tower from './TowerObject.js';

export default class SniperTower extends Tower {
    constructor(scene, x, y) {
        //(scene, x, y, texture, damage, range, speed)
        // speed is the delay between attacks in milliseconds
        super(scene, x, y, 'sniper_tower_1', 'sniper_projectile', 20, 100, 1000).setOrigin(0.5, 0.8);

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
            const menuItem2 = scene.add.text(this.x - 125, this.y - 25, '+20 Range - $50', {fill: '#ffffff'});
            const menuItem3 = scene.add.text(this.x - 125, this.y + 5, '+100 Speed - $50', {fill: '#ffffff'});
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
                this.range += 20;
                popUpMenu.setVisible(false);
                this.setVisible(true);
            });

            // Increase speed
            menuItem3.on('pointerdown', () => {
                this.speed -= 100;
                popUpMenu.setVisible(false);
                this.setVisible(true);
            });

            menuExit.on('pointerdown', () => {
                popUpMenu.setVisible(false);
                this.setVisible(true);
            });
        });
    }
}