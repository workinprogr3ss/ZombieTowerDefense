import BaseScene from './BaseScene.js';

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
        this.backgroundPreload();

        this.load.image('levelSelectMenu', 'src/assets/images/icons/levelSelectMenu.png');
        this.load.spritesheet('levelOne', 'src/assets/images/icons/levelOne.png', {frameWidth: 128, frameHeight: 36});
        this.load.spritesheet('levelTwo', 'src/assets/images/icons/levelTwo.png', {frameWidth: 128, frameHeight: 36});
        this.load.spritesheet('levelThree', 'src/assets/images/icons/levelThree.png', {frameWidth: 128, frameHeight: 36});
        this.load.spritesheet('saveButton', 'src/assets/images/icons/saveButton.png', {frameWidth: 96, frameHeight: 36});
        this.load.spritesheet('backButton', 'src/assets/images/icons/backButton.png', {frameWidth: 96, frameHeight: 36});
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