class MenuScene extends Phaser.Scene {

    constructor() {
        super('MenuScene');
    }

    preload() {

    }

    create() {
        this.add.text(300, 200, 'Menu Scene', {fontSize: '32px', fill: '#FFFFFF'});
        const newGameButton = this.add.text(300, 250, 'New Game', {fontSize: '24px', fill: '#FFFFFF'})
            .setInteractive();
        newGameButton.on('pointerover', () => {
            newGameButton.setStyle({fill: '#ff0'})
        });
        newGameButton.on('pointerout', () => {
            newGameButton.setStyle({fill: '#FFFFFF'})
        })
        newGameButton.on('pointerdown', () => {
            this.scene.start('LevelSelectScene')
        });

        this.add.text(300, 300, 'Load Game', {fontSize: '24px', fill: '#FFFFFF'});
        this.add.text(300, 350, 'Settings', {fontSize: '24px', fill: '#FFFFFF'});
    }

    update() {

    }

}

export default MenuScene;