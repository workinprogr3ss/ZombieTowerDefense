import BaseScene from './BaseScene.js';

class SettingsScene extends BaseScene {
    constructor() {
        super('SettingsScene');
    }

    preload() {
        this.backgroundPreload();

        this.load.image('settingsMenu', 'src/assets/images/icons/settingsMenu.png');
        this.load.spritesheet('backButton', 'src/assets/images/icons/backButton.png', {frameWidth: 96, frameHeight: 36});
    }

    create() {
        this.backgroundCreate();

        this.add.image(400, 300, 'settingsMenu').setOrigin(0.5);

        //Create Buttons
        const backButton = this.add.sprite(400, 425, 'backButton');
        
        //Call to Set Button Interactions
        this.setButtonInteractions(backButton, 'MenuScene');
    }

    //Sets Button Interactions
    setButtonInteractions(button, scene) {
        button.setInteractive({cursor: 'pointer'}).setOrigin(0.5);

        button.on('pointerover', () => {
            button.setFrame(2);
        })        

        button.on('pointerout', () => {
            button.setFrame(0);
        })   

        button.on('pointerdown', () => {
            button.setFrame(1);
        })    

        button.on('pointerup', () => {
            this.scene.start(scene);
        })     
    }
}

export default SettingsScene;