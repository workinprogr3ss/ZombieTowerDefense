// Base scene for common functions and scripts used in multiple scenes

class BaseScene extends Phaser.Scene {

    constructor(key) {
        super(key);
    }

    // Creates Menu Items
    createLinks(menu, createEvents) {
        let spacing = 100;
        menu.forEach(menuItem => {
            menuItem.menuObj = this.add.text(400, 250 + spacing, menuItem.text, {fontSize: '24px', fill: '#FFFFFF'})
                .setInteractive()
                .setOrigin(0.5);
            spacing += 50;
            createEvents(menuItem);
        })
    }

    // Creates Interactions for Menu Items
    createEvents(menuItem) {
        const menuObj = menuItem.menuObj;
        menuObj.on('pointerover', () => {
            menuObj.setStyle({fill: '#ff0'});
        })
        menuObj.on('pointerout', () => {
            menuObj.setStyle({fill: '#FFFFFF'});
        })
        menuObj.on('pointerup', () => {
            this.scene.start(`${menuItem.scene}`);
        })  
    }
}

export default BaseScene;