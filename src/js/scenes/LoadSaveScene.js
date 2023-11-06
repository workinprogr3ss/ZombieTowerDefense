import BaseScene from './BaseScene.js';

class LoadSaveScene extends BaseScene {

    constructor() {
        super('LoadSaveScene');
    }

    preload() {
        //Load Background Image
        this.backgroundPreload();

        //Load Menu Background
        this.load.image('loadSaveMenu', 'src/assets/images/icons/loadSaveMenu.png');

        //Load Save Slot Buttons
        this.saveButtonPreload();

        //Back Button
        this.load.spritesheet('backButton', 'src/assets/images/icons/backButton.png', {frameWidth: 96, frameHeight: 36});
    }

    create() {
        //Create Background Image
        this.backgroundCreate();

        //Create Menu Background
        this.add.image(400, 300, 'loadSaveMenu').setOrigin(0.5);

        //Check Local Storage for Data
        this.checkStorage();

        //Create Buttons
        const loadSave1 = this.add.sprite(400, 250, 'loadSave1').setOrigin(0.5);
        this.add.text(475, 250, `${this.slot1Text}`, this.fontStyling).setOrigin(0.5);

        const loadSave2 = this.add.sprite(400, 300, 'loadSave2').setOrigin(0.5);
        this.add.text(475, 300, `${this.slot2Text}`, this.fontStyling).setOrigin(0.5);

        const loadSave3 = this.add.sprite(400, 350, 'loadSave3').setOrigin(0.5);
        this.add.text(475, 350, `${this.slot3Text}`, this.fontStyling).setOrigin(0.5);

        const backButton = this.add.sprite(400, 425, 'backButton');
        
        //Call to Set Button Interactions (Button, Scene, Data, StartingFrame, Unlock)
        this.setButtonInteractions(loadSave1, 'PreLevelSelectScene', this.saveSlot1, 0, true, 'loadScene');
        this.setButtonInteractions(loadSave2, 'PreLevelSelectScene', this.saveSlot2, 0, true, 'loadScene');
        this.setButtonInteractions(loadSave3, 'PreLevelSelectScene', this.saveSlot3, 0, true, 'loadScene');
        this.setButtonInteractions(backButton, 'MenuScene', null, 0, true);
    }
}

export default LoadSaveScene;