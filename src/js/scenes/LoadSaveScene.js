import BaseScene from './BaseScene.js';

class LoadSaveScene extends BaseScene {

    constructor() {
        super('LoadSaveScene');

        this.saveSlot1 = {};
        this.saveSlot2 = {};
        this.saveSlot3 = {};
    }

    preload() {
        this.backgroundPreload();

        this.load.image('loadSaveMenu', 'src/assets/images/icons/loadSaveMenu.png');
        this.load.spritesheet('loadSave1', 'src/assets/images/icons/loadSave1.png', {frameWidth: 208, frameHeight: 36});
        this.load.spritesheet('loadSave2', 'src/assets/images/icons/loadSave2.png', {frameWidth: 208, frameHeight: 36});
        this.load.spritesheet('loadSave3', 'src/assets/images/icons/loadSave3.png', {frameWidth: 208, frameHeight: 36});
        this.load.spritesheet('backButton', 'src/assets/images/icons/backButton.png', {frameWidth: 96, frameHeight: 36});
    }

    create() {
        this.backgroundCreate();

        if (localStorage.getItem('saveSlot1')) {
            this.saveSlot1 = JSON.parse(localStorage.getItem('saveSlot1'));
        }
        if (localStorage.getItem('saveSlot2')) {
            this.saveSlot2 = JSON.parse(localStorage.getItem('saveSlot2'));
        }
        if (localStorage.getItem('saveSlot3')) {
            this.saveSlot3 = JSON.parse(localStorage.getItem('saveSlot3'));
        }

        this.add.image(400, 300, 'loadSaveMenu').setOrigin(0.5);

        //Create Buttons
        const loadSave1 = this.add.sprite(400, 250, 'loadSave1')
            .setOrigin(0.5);
        this.add.text(475, 250, `${this.saveSlot1.completed}/3`, {
            fontSize: '20px',
            fill: '#000000'
        })
            .setOrigin(0.5);
        const loadSave2 = this.add.sprite(400, 300, 'loadSave2')
            .setOrigin(0.5);
        this.add.text(475, 300, `${this.saveSlot2.completed}/3`, {
            fontSize: '20px', 
            fill: '#000000'
        })
            .setOrigin(0.5);
        const loadSave3 = this.add.sprite(400, 350, 'loadSave3')
            .setOrigin(0.5);
        this.add.text(475, 350, `${this.saveSlot3.completed}/3`, {
            fontSize: '20px', 
            fill: '#000000'
        })
            .setOrigin(0.5);
        const backButton = this.add.sprite(400, 425, 'backButton');
        
        //Call to Set Button Interactions
        this.setButtonInteractions(loadSave1, 'PreLevelSelectScene', this.saveSlot1, 1);
        this.setButtonInteractions(loadSave2, 'PreLevelSelectScene', this.saveSlot2, 2);
        this.setButtonInteractions(loadSave3, 'PreLevelSelectScene', this.saveSlot3, 3);
        this.setButtonInteractions(backButton, 'MenuScene', null);
    }

    //Sets Button Interactions
    setButtonInteractions(button, scene, data) {
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
            if (data) {
                this.registry.set('playerData', {
                    levelOne: data.levelOne,
                    levelTwo: data.levelTwo,
                    levelThree: data.levelThree,
                    saveSlot: data.saveSlot,
                    completed: data.completed,
                });
            }   
            this.scene.start(scene)
        })     
    }
}

export default LoadSaveScene;