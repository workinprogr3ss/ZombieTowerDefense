//Scene Functions
import BaseScene from './BaseScene.js';

//Utility Functions
import { PreloadLevelSelectGraphics } from '../utils/PreloadGraphics.js';

class PreLevelSelectScene extends BaseScene {

    constructor() {
        super('PreLevelSelectScene');

        this.data = {
            levelTwoStartingFrame: 0,
            levelTwoUnlock: false,
            levelThreeStartingFrame: 0,
            levelThreeUnlock: false,
            audioManager: null
        }
    }

    preload() {
        //Load Level Select Graphics
        PreloadLevelSelectGraphics(this);
    }

    create(audioManager) {

        //Check for completion of levels
        if (this.registry.get('playerData').levelTwo) {
            this.data.levelTwoStartingFrame = 1
            this.data.levelTwoUnlock = true
        } else {
            this.data.levelTwoStartingFrame = 0
            this.data.levelTwoUnlock = false
        }

        if (this.registry.get('playerData').levelThree) {
            this.data.levelThreeStartingFrame = 1
            this.data.levelThreeUnlock = true
        } else {
            this.data.levelThreeStartingFrame = 0
            this.data.levelThreeUnlock = false
        }

        this.data.audioManager = audioManager;

        this.scene.start('LevelSelectScene', this.data);
    }
    
}

export default PreLevelSelectScene;