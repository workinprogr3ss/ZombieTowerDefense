//Scene Functions
import BaseScene from './BaseScene.js';

//Utility Functions
import { PreloadSettingsGraphics } from '../utils/PreloadGraphics.js';

class SettingsScene extends BaseScene {
    constructor() {
        super('SettingsScene');
    }

    preload() {
        //Load Settings Graphics
        PreloadSettingsGraphics(this);
    }

    create() {
        //Create Background Image
        this.backgroundCreate();
        this.add.image(400, 300, 'settingsMenu').setOrigin(0.5);

        //Create Buttons
        const backButton = this.add.sprite(400, 425, 'backButton');
        
        //Call to Set Button Interactions (button, scene, data, startingFrame, unlock, source, slot, audio)
        this.setButtonInteractions(backButton, 'MenuScene', null, 0, true, null);
    }
}

export default SettingsScene;