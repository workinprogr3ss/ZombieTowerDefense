//Managers
import AudioManager from '../managers/AudioManager.js';

//Scene Functions
import BaseScene from './BaseScene.js';

//Utility Functions
import { PreloadMenuGraphics } from '../utils/PreloadGraphics.js';

class MenuScene extends BaseScene {
    
    constructor() {
        super('MenuScene');

        this.audioManager = new AudioManager(this)
    }
    
    preload() {
        //Load Menu Graphics
        PreloadMenuGraphics(this);

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
        
        //Call to Set Button Interactions (button, scene, data, startingFrame, unlock, source, slot, audio)
        this.setButtonInteractions(newGameButton, 'PreLevelSelectScene', null, 0, true, null, null , this.audioManager);
        this.setButtonInteractions(loadGameButton, 'LoadSaveScene', null, 0, true, null, null, this.audioManager);
        this.setButtonInteractions(settingsButton, 'SettingsScene', null, 0, true, null);
        this.setButtonInteractions(creditsButton, 'CreditsScene', null, 0, true, null);

        //Create Game Title
        this.add.image(400,300, 'title').setOrigin(0.5);

        //Add Dev Button
        const devButton = this.add.image(0, 590, 'devButton').setOrigin(0).setInteractive({cursor: 'pointer'});
        devButton.on('pointerup', () => {
            localStorage.setItem(`saveSlot3`, JSON.stringify({
                levelOne: true,
                levelTwo: true,
                levelThree: true,
                saveSlot: 3,
                completed: 3,
                active: true
            }))
        });
        
        //Create Default PlayerData Registry
        this.registry.set('playerData', {
            levelOne: true,
            levelTwo: false,
            levelThree: false,
            saveSlot: null,
            completed: 1
        });

        //Play Audio
        //this.audioManager.playBackgroundAudio();
        this.audioManager.playNewsAudio();
    }
}

export default MenuScene;