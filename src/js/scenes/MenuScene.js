import BaseScene from './BaseScene.js';

class MenuScene extends BaseScene {
    
    constructor() {
        super('MenuScene');
    }
    
    preload() {
        //Load Background Image
        this.backgroundPreload();

        //Load Buttons
        this.load.spritesheet('newGameButton', 'src/assets/images/icons/newGameButton.png', {frameWidth: 128, frameHeight: 48});
        this.load.spritesheet('loadGameButton', 'src/assets/images/icons/loadGameButton.png', {frameWidth: 128, frameHeight: 48});
        this.load.spritesheet('settingsButton', 'src/assets/images/icons/settingsButton.png', {frameWidth: 128, frameHeight: 48});
    }

    create() {
        //Create Background Image
        this.backgroundCreate();

        //Create Buttons
        const newGameButton = this.add.sprite(400, 300, 'newGameButton');
        const loadGameButton = this.add.sprite(400, 350, 'loadGameButton');
        const settingsButton = this.add.sprite(400, 400, 'settingsButton');
        
        //Call to Set Button Interactions (Button, Scene, Data, StartingFrame, Unlock)
        this.setButtonInteractions(newGameButton, 'PreLevelSelectScene', null, 0, true);
        this.setButtonInteractions(loadGameButton, 'LoadSaveScene', null, 0, true);
        this.setButtonInteractions(settingsButton, 'SettingsScene', null, 0, true);

        //Game Title
        this.add.text(400, 200, 'Post-Pandemic Perimeter', {fontSize: '36px', fill: '#FFFFFF'})
            .setOrigin(0.5);

        //Create Default PlayerData Registry
        this.registry.set('playerData', {
            levelOne: true,
            levelTwo: false,
            levelThree: false,
            saveSlot: null,
            completed: 1
        });

        //Test Data
        localStorage.setItem('saveSlot1', JSON.stringify({
            levelOne: true,
            levelTwo: false,
            levelThree: false,
            saveSlot: 1,
            completed: 1,
            active: false
        }));

        localStorage.setItem('saveSlot2', JSON.stringify({
            levelOne: true,
            levelTwo: true,
            levelThree: false,
            saveSlot: 2,
            completed: 1,
            active: false,
        }))

        localStorage.setItem('saveSlot3', JSON.stringify({
            levelOne: true,
            levelTwo: false,
            levelThree: false,
            saveSlot: 3,
            completed: 1,
            active: false
        }))
    }
}

export default MenuScene;