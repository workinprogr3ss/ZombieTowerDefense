class MenuScene extends Phaser.Scene {

    constructor() {
        super('MenuScene');
    }

    preload() {

    }

    create() {
        this.add.text(300, 200, 'Menu Scene', {fontSize: '32px', fill: '#FFFFFF'});
    }

    update() {

    }

}

export default MenuScene;