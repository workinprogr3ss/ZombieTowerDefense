import BaseScene from './BaseScene.js';

class LevelSelectScene extends BaseScene {

    constructor() {
        super('LevelSelectScene');
    }

    create(levelProgress) {
        //Create Background Image
        this.backgroundCreate();
        
        //Create Menu Background
        this.add.image(400, 300, 'levelSelectMenu').setOrigin(0.5);

        //Create Buttons
        const demoLevelButton = this.add.sprite(400, 200, 'demoLevelButton').setOrigin(0.5);
        const levelOne = this.add.sprite(400, 250, 'levelOne').setOrigin(0.5);
        const levelTwo = this.add.sprite(400, 300, 'levelTwo')
            .setOrigin(0.5)
            .setFrame(levelProgress.levelTwoStartingFrame);
        const levelThree = this.add.sprite(400, 350, 'levelThree')
            .setOrigin(0.5)
            .setFrame(levelProgress.levelThreeStartingFrame);          
        const saveButton = this.add.sprite(460, 425, 'saveButton').setOrigin(0.5);
        const backButton = this.add.sprite(340, 425, 'backButton').setOrigin(0.5);
        
        //Call to Set Button Interactions (button, scene, data, startingFrame, unlock, source)
        this.setButtonInteractions(demoLevelButton, 'DemoLevelScene', null, 0, true, null);
        this.setButtonInteractions(levelOne, 'MediumLevelScene', null, 0, true, null);
        this.setButtonInteractions(levelTwo, 'HardLevelScene', null, levelProgress.levelTwoStartingFrame, levelProgress.levelTwoUnlock, null);
        this.setButtonInteractions(levelThree, 'MenuScene', null, levelProgress.levelThreeStartingFrame, levelProgress.levelThreeUnlock, null);
        this.setButtonInteractions(saveButton, 'SaveGameScene', null, 0, true, null);
        this.setButtonInteractions(backButton, 'MenuScene', null, 0, true, null);
    }
}

export default LevelSelectScene;