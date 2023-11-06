import BaseScene from './BaseScene.js';

class SettingsScene extends BaseScene {
    constructor() {
        super('SettingsScene');
    }

    preload() {
        //Load Background Image
        this.backgroundPreload();

        //Load Buttons
        this.load.image('settingsMenu', 'src/assets/images/icons/settingsMenu.png');
        this.load.spritesheet('backButton', 'src/assets/images/icons/backButton.png', {frameWidth: 96, frameHeight: 36});
    }

    create() {
        //Create Background Image
        this.backgroundCreate();
        this.add.image(400, 300, 'settingsMenu').setOrigin(0.5);

        //Create Buttons
        const backButton = this.add.sprite(400, 425, 'backButton');
        
        //Call to Set Button Interactions (button, scene, data, startingFrame, unlock, source)
        this.setButtonInteractions(backButton, 'MenuScene', null, 0, true, null);
    }
}

export default SettingsScene;