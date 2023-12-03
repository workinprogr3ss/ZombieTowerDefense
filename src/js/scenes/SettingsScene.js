//Scene Functions
import BaseScene from './BaseScene.js';

//Utility Functions
import { PreloadSettingsGraphics } from '../utils/PreloadGraphics.js';

class SettingsScene extends BaseScene {
    constructor() {
        super('SettingsScene');

        this.backgroundToggle = true;
        this.soundEffectToggle = true;
        this.backgroundBtn;
        this.soundEffectBtn;
    }

    preload() {
        //Load Settings Graphics
        PreloadSettingsGraphics(this);
    }

    create(audioManager) {
        //Create Background Image
        this.backgroundCreate();
        this.add.image(400, 300, 'settingsMenu').setOrigin(0.5);

        //Create Buttons
        this.backgroundBtn = this.add.sprite(330, 250, 'toggle');
        this.soundEffectBtn = this.add.sprite(330, 300, 'toggle');
        const backButton = this.add.sprite(400, 380, 'backButton');
        
        //Call to Set Button Interactions (button, scene, data, startingFrame, unlock, source, slot, audio)
        this.setButtonInteractions(backButton, 'MenuScene', null, 0, true, null);
        this.audioManagerButtons(this.backgroundBtn, 'background', audioManager);
        this.audioManagerButtons(this.soundEffectBtn, 'soundEffect', audioManager);
    }

    audioManagerButtons(button, name, audioManager) {
        button.setInteractive({cursor: 'pointer'})
        button.on('pointerup', () => {
            if (name == 'background') {
                if (this.backgroundToggle) {
                    this.backgroundToggle = false;
                    audioManager.stopAllBackgroundAudio();
                    audioManager.stopBackgroundAudio();
                    audioManager.stopNewsAudio();
                } else {
                    this.backgroundToggle = true;
                    audioManager.enableBackgroundAudio();
                    audioManager.playBackgroundAudio();
                    audioManager.playNewsAudio();
                }
            } else {
                if (this.soundEffectToggle) {
                    this.soundEffectToggle = false;
                    audioManager.stopAllSoundEffectAudio();
                } else {
                    this.soundEffectToggle = true;
                    audioManager.enableSoundEffectAudio();
                }
            }
        });
    }   

    update() {
        if (this.backgroundToggle) {
            this.backgroundBtn.setFrame(0);
        } else {
            this.backgroundBtn.setFrame(1);
        }

        if (this.soundEffectToggle) {
            this.soundEffectBtn.setFrame(0);
        } else {
            this.soundEffectBtn.setFrame(1);
        }
    }
}

export default SettingsScene;