import BaseScene from './BaseScene.js';

class SaveGameScene extends BaseScene {

    constructor() {
        super('SaveGameScene');
    }

    preload() {
        //Load Background Image
        this.backgroundPreload();

        //Load Menu Backgroundsand Buttons
        this.load.image('SaveGameMenu', 'src/assets/images/icons/SaveGameMenu.png');
        this.load.image('overrideMenu', 'src/assets/images/icons/overrideMenu.png');
        this.load.spritesheet('yes', 'src/assets/images/icons/yes.png', {frameWidth: 80, frameHeight: 36});
        this.load.spritesheet('no', 'src/assets/images/icons/no.png', {frameWidth: 80, frameHeight: 36});

        //Load Save Slot Buttons
        this.saveButtonPreload();

        //Load Back Button
        this.load.spritesheet('backButton', 'src/assets/images/icons/backButton.png', {frameWidth: 96, frameHeight: 36});
    }

    create() {
        //Create Background Image
        this.backgroundCreate();

        //Create Menu Background
        this.add.image(400, 300, 'SaveGameMenu').setOrigin(0.5);

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

        //Call to Set Button Interactions (button, scene, data, startingFrame, unlock, source, slot)
        this.setButtonInteractions(loadSave1, 'SaveGameScene', this.saveSlot1, 0, true, 'saveGameScene', 1);
        this.setButtonInteractions(loadSave2, 'SaveGameScene', this.saveSlot2, 0, true, 'saveGameScene', 2);
        this.setButtonInteractions(loadSave3, 'SaveGameScene', this.saveSlot3, 0, true, 'saveGameScene', 3);
        this.setButtonInteractions(backButton, 'LevelSelectScene', null, 0, true);
    }
}

export default SaveGameScene;