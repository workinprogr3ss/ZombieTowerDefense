import BaseScene from './BaseScene.js';

class LoadSaveScene extends BaseScene {

    constructor() {
        super('LoadSaveScene');

        this.saveSlot1 = {};
        this.slot1Text = '-';
        this.saveSlot2 = {};
        this.slot2Text = '-';
        this.saveSlot3 = {};
        this.slot3Text = '-';

        this.fontStyling = {
            fontSize: '20px',
            fill: '#000000'
        };
    }

    preload() {
        //Load Background Image
        this.backgroundPreload();

        //Load Menu Background
        this.load.image('loadSaveMenu', 'src/assets/images/icons/loadSaveMenu.png');

        //Load Buttons
        this.load.spritesheet('loadSave1', 'src/assets/images/icons/loadSave1.png', {frameWidth: 208, frameHeight: 36});
        this.load.spritesheet('loadSave2', 'src/assets/images/icons/loadSave2.png', {frameWidth: 208, frameHeight: 36});
        this.load.spritesheet('loadSave3', 'src/assets/images/icons/loadSave3.png', {frameWidth: 208, frameHeight: 36});
        this.load.spritesheet('backButton', 'src/assets/images/icons/backButton.png', {frameWidth: 96, frameHeight: 36});
    }

    create() {
        //Create Background Image
        this.backgroundCreate();

        //Check Local Storage for Data
        if (JSON.parse(localStorage.getItem('saveSlot1')).active) {
            this.saveSlot1 = JSON.parse(localStorage.getItem('saveSlot1'));
            this.slot1Text = `${this.saveSlot1.completed}/3`
        }
        if (JSON.parse(localStorage.getItem('saveSlot2')).active) {
            this.saveSlot2 = JSON.parse(localStorage.getItem('saveSlot2'));
            this.slot2Text = `${this.saveSlot2.completed}/3`
        }
        if (JSON.parse(localStorage.getItem('saveSlot3')).active) {
            this.saveSlot3 = JSON.parse(localStorage.getItem('saveSlot3'));
            this.slot3Text = `${this.saveSlot3.completed}/3`
        }

        //Create Menu Background
        this.add.image(400, 300, 'loadSaveMenu').setOrigin(0.5);

        //Create Buttons
        const loadSave1 = this.add.sprite(400, 250, 'loadSave1').setOrigin(0.5);
        this.add.text(475, 250, `${this.slot1Text}`, this.fontStyling).setOrigin(0.5);

        const loadSave2 = this.add.sprite(400, 300, 'loadSave2').setOrigin(0.5);
        this.add.text(475, 300, `${this.slot2Text}`, this.fontStyling).setOrigin(0.5);

        const loadSave3 = this.add.sprite(400, 350, 'loadSave3').setOrigin(0.5);
        this.add.text(475, 350, `${this.slot3Text}`, this.fontStyling).setOrigin(0.5);

        const backButton = this.add.sprite(400, 425, 'backButton');
        
        //Call to Set Button Interactions (Button, Scene, Data, StartingFrame, Unlock)
        this.setButtonInteractions(loadSave1, 'PreLevelSelectScene', this.saveSlot1, 0, true);
        this.setButtonInteractions(loadSave2, 'PreLevelSelectScene', this.saveSlot2, 0, true);
        this.setButtonInteractions(loadSave3, 'PreLevelSelectScene', this.saveSlot3, 0, true);
        this.setButtonInteractions(backButton, 'MenuScene', null, 0, true);
    }
}

export default LoadSaveScene;