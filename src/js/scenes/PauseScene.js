class PauseScene extends Phaser.Scene {
    constructor() {
        super({ key: 'PauseScene' });
        
        this.pauseMenu = null
        this.continueButton = null
        this.exitButton = null
    }

    preload() {
        this.load.spritesheet('exitButton', 'src/assets/images/icons/exitButton.png', {frameWidth: 64, frameHeight: 36});
        this.load.spritesheet('restartButton', 'src/assets/images/icons/restartButton.png', {frameWidth: 128, frameHeight: 35});
        this.load.spritesheet('resumeButton', 'src/assets/images/icons/resumeButton.png', {frameWidth: 128, frameHeight: 35});
        this.load.image('pauseMenu', 'src/assets/images/icons/pauseMenu.png');
    }

    create(data) {
        data.context.physics.pause();
        data.context.scene.pause();
        this.pauseMenu = this.add.image(400,300, 'pauseMenu');
        //this.restartButton = this.add.sprite(400, 300, 'restartButton').setInteractive({cursor: 'pointer'}).setOrigin(0.5);
        this.resumeButton = this.add.sprite(400, 270, 'resumeButton').setInteractive({cursor: 'pointer'}).setOrigin(0.5);
        this.restartButton = this.add.sprite(400, 310, 'restartButton').setInteractive({cursor: 'pointer'}).setOrigin(0.5);
        this.exitButton = this.add.sprite(400, 350, 'exitButton').setInteractive({cursor: 'pointer'}).setOrigin(0.5);

        this.pauseButtonInteractions(this.resumeButton, 'resumeButton', data.context, data.scene);
        this.pauseButtonInteractions(this.restartButton, 'restartButton', data.context, data.scene);
        this.pauseButtonInteractions(this.exitButton, 'exitButton', data.context, data.scene);
    }

    pauseButtonInteractions(button, source, context, scene) {
        button.on('pointerover', () => {
            button.setFrame(2);
        });
        button.on('pointerdown', () => {
            button.setFrame(1);
        });
        button.on('pointerout', () => {
            button.setFrame(0);
        });
        if (source == 'resumeButton') {
            button.on('pointerup', () => {
                this.destroyButtons();
                context.physics.resume();
                context.scene.resume(scene);
            }); 
        } else if (source == 'restartButton') {
            button.on('pointerup', () => {
                this.destroyButtons();
                context.physics.resume();
                context.scene.start(scene)
            }); 
        } else {
            button.on('pointerup', () => {
                this.destroyButtons();
                context.physics.resume();
                context.scene.start('LevelSelectScene')
            }); 
        }
    }

    destroyButtons() {
        this.pauseMenu.destroy();
        this.resumeButton.destroy();
        this.restartButton.destroy();
        this.exitButton.destroy();
    }
}

export default PauseScene;