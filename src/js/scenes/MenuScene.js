//Managers
import AudioManager from '../managers/AudioManager.js';

//Scene Functions
import BaseScene from './BaseScene.js';

//Utility Functions
import { PreloadMenuGraphics } from '../utils/PreloadGraphics.js';

let initialCreate = true;

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
        this.setButtonInteractions(settingsButton, 'SettingsScene', null, 0, true, null, null, this.audioManager);
        this.setButtonInteractions(creditsButton, 'CreditsScene', null, 0, true, null);

        //Create Game Title
        this.add.image(400,300, 'title').setOrigin(0.5);

        //Add Dev Button
        const unlockSaveButton = this.add.image(0, 590, 'devButton').setOrigin(0).setInteractive({cursor: 'pointer'});
        unlockSaveButton.on('pointerup', () => {
            localStorage.setItem(`saveSlot3`, JSON.stringify({
                levelOne: true,
                levelOneCompleted: true,
                levelTwo: true,
                levelTwoCompleted: true,
                levelThree: true,
                levelThreeCompleted: true,
                saveSlot: 3,
                completed: 3,
                active: true
            }))
        });

        //Add Dev Button
        const deleteSaveButton = this.add.image(16, 590, 'devButton').setOrigin(0).setInteractive({cursor: 'pointer'});
        deleteSaveButton.on('pointerup', () => {
            localStorage.removeItem(`saveSlot1`);
            localStorage.removeItem(`saveSlot2`);
            localStorage.removeItem(`saveSlot3`);
        });

        //Game Over Scene Button
        const gameOverButton = this.add.image(500, 590, 'devButton').setOrigin(0).setInteractive({cursor: 'pointer'});
        gameOverButton.on('pointerup', () => {
            this.scene.start('GameOverScene');
        });
        
        //Create Default PlayerData Registry
        this.registry.set('playerData', {
            levelOne: true,
            levelOneCompleted: false,
            levelTwo: false,
            levelTwoCompleted: false,
            levelThree: false,
            levelThreeCompleted: false,
            saveSlot: null,
            completed: 0
        });

        if (initialCreate) {
            this.audioManager.enableBackgroundAudio();
            this.audioManager.enableSoundEffectAudio();  
            initialCreate = false;
        }

        //Play Audio        
        this.audioManager.playBackgroundAudio();
        this.audioManager.playNewsAudio();
    }
}

export default MenuScene;