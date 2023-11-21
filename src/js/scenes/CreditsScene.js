//Scene Functions
import BaseScene from './BaseScene.js';

//Utility Functions
import { PreloadCreditsGraphics } from '../utils/PreloadGraphics.js';

class CreditsScene extends BaseScene {

    constructor() {
        super('CreditsScene');
    }

    preload() {
        //Load Credits Graphics
        PreloadCreditsGraphics(this);
    }

    create() {
        //Create Background Image
        this.backgroundCreate();

        //Create Menu Background
        this.add.image(400, 300, 'creditsMenu').setOrigin(0.5);

        //Create Back Button
        const backButton = this.add.sprite(400, 450, 'backButton');

        //Call to Set Button Interactions (button, scene, data, startingFrame, unlock, source, slot, audio)
        this.setButtonInteractions(backButton, 'MenuScene', null, 0, true);
    }
}

export default CreditsScene;