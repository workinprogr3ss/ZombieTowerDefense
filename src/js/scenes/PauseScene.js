//Utility Functions
import { PreloadPauseGameGraphics } from '../utils/PreloadGraphics.js';

class PauseScene extends Phaser.Scene {
    constructor() {
        super({ key: 'PauseScene' });
        
        this.pauseMenu = null
        this.continueButton = null
        this.exitButton = null
    }

    preload() {
        //Load PauseGame Graphics
        PreloadPauseGameGraphics(this);
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

    pauseButtonInteractions(button, source, context, sceneName) {
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
                context.scene.resume(sceneName);
            }); 
        } else if (source == 'restartButton') {
            button.on('pointerup', () => {
                this.destroyButtons();
                context.physics.resume();
                context.scene.start(sceneName);
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