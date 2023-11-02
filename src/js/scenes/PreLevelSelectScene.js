import BaseScene from './BaseScene.js';

class PreLevelSelectScene extends BaseScene {

    constructor() {
        super('PreLevelSelectScene');

        this.levelProgress = {
            levelTwoStartingFrame: 0,
            levelTwoUnlock: false,
            levelThreeStartingFrame: 0,
            levelThreeUnlock: false
        }
    }

    preload() {
        this.backgroundPreload();

        this.load.image('levelSelectMenu', 'src/assets/images/icons/levelSelectMenu.png');
        this.load.spritesheet('demoLevelButton', 'src/assets/images/icons/demoLevelButton.png', {frameWidth: 96, frameHeight: 36});
        this.load.spritesheet('levelOne', 'src/assets/images/icons/levelOne.png', {frameWidth: 128, frameHeight: 36});
        this.load.spritesheet('levelTwo', 'src/assets/images/icons/levelTwo.png', {frameWidth: 128, frameHeight: 36});
        this.load.spritesheet('levelThree', 'src/assets/images/icons/levelThree.png', {frameWidth: 128, frameHeight: 36});
        this.load.spritesheet('saveButton', 'src/assets/images/icons/saveButton.png', {frameWidth: 96, frameHeight: 36});
        this.load.spritesheet('backButton', 'src/assets/images/icons/backButton.png', {frameWidth: 96, frameHeight: 36});
    }

    create() {

        if (this.registry.get('playerData').levelTwo) {
            this.levelProgress.levelTwoStartingFrame = 1
            this.levelProgress.levelTwoUnlock = true
        } else {
            this.levelProgress.levelTwoStartingFrame = 0
            this.levelProgress.levelTwoUnlock = false
        }

        if (this.registry.get('playerData').levelThree) {
            this.levelProgress.levelThreeStartingFrame = 1
            this.levelProgress.levelThreeUnlock = true
        } else {
            this.levelProgress.levelThreeStartingFrame = 0
            this.levelProgress.levelThreeUnlock = false
        }

        this.scene.start('LevelSelectScene', this.levelProgress);
    }
    
}

export default PreLevelSelectScene;