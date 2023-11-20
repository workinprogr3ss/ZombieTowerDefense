import AudioManager from '../managers/AudioManager.js';
import BaseScene from './BaseScene.js';

class MenuScene extends BaseScene {
    
    constructor() {
        super('MenuScene');

        this.audioManager = new AudioManager(this)
    }
    
    preload() {
        //Load Background Image
        this.backgroundPreload();

        this.load.image('title', 'src/assets/images/icons/TitleBackground.png');

        //Load Buttons
        this.load.spritesheet('newGameButton', 'src/assets/images/icons/newGameButton.png', {frameWidth: 128, frameHeight: 48});
        this.load.spritesheet('loadGameButton', 'src/assets/images/icons/loadGameButton.png', {frameWidth: 128, frameHeight: 48});
        this.load.spritesheet('settingsButton', 'src/assets/images/icons/settingsButton.png', {frameWidth: 128, frameHeight: 48});
        this.load.spritesheet('creditsButton', 'src/assets/images/icons/creditsButton.png', {frameWidth: 128, frameHeight: 36});

        //Load Background Music
        this.audioManager.loadAudio()
    }

    create() {
        //Create Background Image
        this.backgroundCreate();

        //Create Buttons
        const newGameButton = this.add.sprite(400, 380, 'newGameButton');
        const loadGameButton = this.add.sprite(400, 430, 'loadGameButton');
        const settingsButton = this.add.sprite(400, 480, 'settingsButton');
        const creditsButton = this.add.sprite(400, 530, 'creditsButton');
        
        //Call to Set Button Interactions
        this.setButtonInteractions(newGameButton, 'PreLevelSelectScene', null, 0, true, null);
        this.setButtonInteractions(loadGameButton, 'LoadSaveScene', null, 0, true, null);
        this.setButtonInteractions(settingsButton, 'SettingsScene', null, 0, true, null);
        this.setButtonInteractions(creditsButton, 'CreditsScene', null, 0, true, null);

        //Game Title
        this.add.image(400,300, 'title').setOrigin(0.5);
        
        //Create Default PlayerData Registry
        this.registry.set('playerData', {
            levelOne: true,
            levelTwo: false,
            levelThree: false,
            saveSlot: null,
            completed: 1
        });

        //Play Audio
        this.audioManager.playBackgroundAudio();
        //this.audioManager.playNewsAudio();
    }
}

export default MenuScene;