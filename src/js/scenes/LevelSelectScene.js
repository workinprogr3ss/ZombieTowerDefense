class LevelSelectScene extends Phaser.Scene {

    constructor() {
        super('LevelSelectScene');
    }

    preload() {

    }

    create() {
        this.add.text(400, 200, 'Level Selection Scene', {fontSize: '32px', fill: '#FFFFFF'})
            .setOrigin(0.5);
        const levelOneButton = this.add.text(400, 250, 'Level One', {fontSize: '24px', fill: '#FFFFFF'})
            .setInteractive()
            .setOrigin(0.5);
        levelOneButton.on('pointerover', () => {
            levelOneButton.setStyle({fill: '#ff0'})
        });
        levelOneButton.on('pointerout', () => {
            levelOneButton.setStyle({fill: '#FFFFFF'})
        })
        levelOneButton.on('pointerdown', () => {
            this.scene.start('LevelOneScene')
        });

        const backButton = this.add.text(400, 300, 'Back', {fontSize: '24px', fill: '#FFFFFF'})
            .setInteractive()
            .setOrigin(0.5);
        backButton.on('pointerover', () => {
            backButton.setStyle({fill: '#ff0'})
        });
        backButton.on('pointerout', () => {
            backButton.setStyle({fill: '#FFFFFF'})
        })
        backButton.on('pointerdown', () => {
            this.scene.start('MenuScene')
        });
    }

    update() {

    }

}

export default LevelSelectScene;