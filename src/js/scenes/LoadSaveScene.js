import BaseScene from './BaseScene.js';

class LoadSaveScene extends BaseScene {

    constructor() {
        super('LoadSaveScene');
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

        //On press
        //Check Local Storage for Data
        this.registry.set('playerData', {
            levelOne: true,
            levelTwo: true,
            levelThree: true,
        });
        //Go to LevelSelect

        this.add.image(400, 300, 'loadSaveMenu').setOrigin(0.5);
        const loadSave1 = this.add.sprite(400, 250, 'loadSave1')
            .setOrigin(0.5);
        const loadSave2 = this.add.sprite(400, 300, 'loadSave2')
            .setOrigin(0.5);
        const loadSave3 = this.add.sprite(400, 350, 'loadSave3')
            .setOrigin(0.5);

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

export default LoadSaveScene;