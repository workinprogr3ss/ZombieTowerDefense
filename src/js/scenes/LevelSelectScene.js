import BaseScene from './BaseScene.js';

class LevelSelectScene extends BaseScene {

    constructor() {
        super('LevelSelectScene');
    }

    create(data) {
        //Audio Manager to play upon return from Level Scenes
        data.audioManager.playNewsAudio();

        //Create Background Image
        this.backgroundCreate();
        
        //Create Menu Background
        this.add.image(400, 300, 'levelSelectMenu').setOrigin(0.5);

        //Create Buttons
        const levelOne = this.add.sprite(236, 256, 'levelOne').setOrigin(0.5);
        const levelTwo = this.add.sprite(401, 256, 'levelTwo')
            .setOrigin(0.5)
            .setFrame(data.levelTwoStartingFrame);
        const levelThree = this.add.sprite(564, 256, 'levelThree')
            .setOrigin(0.5)
            .setFrame(data.levelThreeStartingFrame);          
        const saveButton = this.add.sprite(460, 425, 'saveButton').setOrigin(0.5);
        const backButton = this.add.sprite(340, 425, 'backButton').setOrigin(0.5);
        
        //Call to Set Button Interactions (button, scene, data, startingFrame, unlock, source, slot, audio)
        this.setButtonInteractions(levelOne, 'EasyLevelScene', null, 0, true, null, null, data.audioManager);
        this.setButtonInteractions(levelTwo, 'MediumLevelScene', null, data.levelTwoStartingFrame, data.levelTwoUnlock, null, null, data.audioManager);
        this.setButtonInteractions(levelThree, 'HardLevelScene', null, data.levelThreeStartingFrame, data.levelThreeUnlock, null, null, data.audioManager);
        this.setButtonInteractions(saveButton, 'SaveGameScene', null, 0, true, null);
        this.setButtonInteractions(backButton, 'MenuScene', null, 0, true, null);
    }
}

export default LevelSelectScene;