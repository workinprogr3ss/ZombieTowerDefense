import BaseScene from './BaseScene.js';

class LevelSelectScene extends BaseScene {

    constructor() {
        super('LevelSelectScene');
    }

    create(levelProgress) {
        this.backgroundCreate();
        
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
        
        //Call to Set Button Interactions (Button, Scene, Data, StartingFrame, Unlock)
        this.setButtonInteractions(demoLevelButton, 'DemoLevelScene', null, 0, true);
        this.setButtonInteractions(levelOne, 'MenuScene', 0, true);
        this.setButtonInteractions(levelTwo, 'MenuScene', null, levelProgress.levelTwoStartingFrame, levelProgress.levelTwoUnlock);
        this.setButtonInteractions(levelThree, 'MenuScene', null, levelProgress.levelThreeStartingFrame, levelProgress.levelThreeUnlock);
        this.setButtonInteractions(saveButton, 'SaveGameScene', null, 0, true);
        this.setButtonInteractions(backButton, 'MenuScene', null, 0, true);
    }
}

export default LevelSelectScene;