import BaseScene from './BaseScene.js';

class MenuScene extends BaseScene {
    
    constructor() {
        super('MenuScene');
    }
    
    preload() {
        this.backgroundPreload();

        this.load.spritesheet('newGameButton', 'src/assets/images/icons/newGameButton.png', {frameWidth: 128, frameHeight: 48});
        this.load.spritesheet('loadGameButton', 'src/assets/images/icons/loadGameButton.png', {frameWidth: 128, frameHeight: 48});
        this.load.spritesheet('settingsButton', 'src/assets/images/icons/settingsButton.png', {frameWidth: 128, frameHeight: 48});
    }

    create() {
        this.backgroundCreate();

        //Create Buttons
        const newGameButton = this.add.sprite(400, 300, 'newGameButton');
        const loadGameButton = this.add.sprite(400, 350, 'loadGameButton');
        const settingsButton = this.add.sprite(400, 400, 'settingsButton');
        
        //Call to Set Button Interactions
        this.setButtonInteractions(newGameButton, 'PreLevelSelectScene');
        this.setButtonInteractions(loadGameButton, 'LoadSaveScene');
        this.setButtonInteractions(settingsButton, 'SettingsScene');

        //Game Title
        this.add.text(400, 200, 'Post-Pandemic Perimeter', {fontSize: '36px', fill: '#FFFFFF'})
            .setOrigin(0.5);

        //Create PlayerData Registry
        this.registry.set('playerData', {
            levelOne: true,
            levelTwo: false,
            levelThree: false,
            saveSlot: null,
            completed: 1
        });
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

export default MenuScene;