import BaseScene from './BaseScene.js';

class LevelSelectScene extends BaseScene {

    constructor() {
        super('LevelSelectScene');
    }

    create(data) {
        data.audioManager.playNewsAudio();

        //Create Background Image
        this.backgroundCreate();
        
        //Create Menu Background
        this.add.image(400, 300, 'levelSelectMenu').setOrigin(0.5);

        //Create Buttons
        //const demoLevelButton = this.add.sprite(400, 200, 'demoLevelButton').setOrigin(0.5);
        const levelOne = this.add.sprite(400, 250, 'levelOne').setOrigin(0.5);
        const levelTwo = this.add.sprite(400, 300, 'levelTwo')
            .setOrigin(0.5)
            .setFrame(data.levelTwoStartingFrame);
        const levelThree = this.add.sprite(400, 350, 'levelThree')
            .setOrigin(0.5)
            .setFrame(data.levelThreeStartingFrame);          
        const saveButton = this.add.sprite(460, 425, 'saveButton').setOrigin(0.5);
        const backButton = this.add.sprite(340, 425, 'backButton').setOrigin(0.5);
        
        //Call to Set Button Interactions (button, scene, data, startingFrame, unlock, source, slot, audio)
        this.setButtonInteractions(levelOne, 'EasyLevelScene', null, 0, true, null, null, data.audioManager);
        this.setButtonInteractions(levelTwo, 'MediumLevelScene', null, data.levelTwoStartingFrame, data.levelTwoUnlock, null, null, data.audioManager);
        this.setButtonInteractions(levelThree, 'HardLevelScene', null, data.levelThreeStartingFrame, data.levelThreeUnlock, null, data.audioManager);
        this.setButtonInteractions(saveButton, 'SaveGameScene', null, 0, true, null);
        this.setButtonInteractions(backButton, 'MenuScene', null, 0, true, null);

    }
}

export default LevelSelectScene;