import BaseScene from './BaseScene.js';

class CreditsScene extends BaseScene {

    constructor() {
        super('CreditsScene');
    }

    preload() {
        //Load Background Image
        this.backgroundPreload();

        //Load Menu Backgrounds and Buttons
        this.load.image('creditsMenu', 'src/assets/images/icons/creditsMenu.png');
        this.load.spritesheet('backButton', 'src/assets/images/icons/backButton.png', {frameWidth: 96, frameHeight: 36});
    
    }

    create() {
        //Create Background Image
        this.backgroundCreate();

        //Create Menu Background
        this.add.image(400, 300, 'creditsMenu').setOrigin(0.5);

        //Create Back Button
        const backButton = this.add.sprite(400, 425, 'backButton');

        //Call to Set Button Interactions 
        this.setButtonInteractions(backButton, 'MenuScene', null, 0, true);
    }
}

export default CreditsScene;