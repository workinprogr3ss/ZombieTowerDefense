import BaseScene from './BaseScene.js';

class LevelSelectScene extends BaseScene {

    constructor() {
        super('LevelSelectScene');
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
        this.backgroundCreate();

        //let playerData = this.registry.get('playerData');
        
        this.add.image(400, 300, 'levelSelectMenu').setOrigin(0.5);

        //Create Buttons
        const demoLevelButton = this.add.sprite(400, 200, 'demoLevelButton').setOrigin(0.5);
        const levelOne = this.add.sprite(400, 250, 'levelOne').setOrigin(0.5);
        const levelTwo = this.add.sprite(400, 300, 'levelTwo').setOrigin(0.5);
        const levelThree = this.add.sprite(400, 350, 'levelThree').setOrigin(0.5);
        const saveButton = this.add.sprite(460, 425, 'saveButton').setOrigin(0.5);
        const backButton = this.add.sprite(340, 425, 'backButton').setOrigin(0.5);
        
        //Call to Set Button Interactions
        this.setButtonInteractions(demoLevelButton, 'DemoLevelScene', 0);
        this.setButtonInteractions(levelOne, 'MenuScene', 0);
        this.checkProgress(levelTwo, null);
        this.checkProgress(levelThree, null);
        this.setButtonInteractions(saveButton, null, 0);
        this.setButtonInteractions(backButton, 'MenuScene', 0);
    }

    checkProgress(button, scene) {
        //If Level is Unlocked
        if (button.texture.key == 'levelTwo' && this.registry.get('playerData').levelTwo) {
            this.setButtonInteractions(button, scene, 1);
        } else {
            button.setFrame(0);
        }
        if (button.texture.key == 'levelThree' && this.registry.get('playerData').levelThree) {
            this.setButtonInteractions(button, scene, 1);
        } else {
            button.setFrame(0);
        }
    }

    //Sets Button Interactions
    setButtonInteractions(button, scene, startingFrame) {
        button.setInteractive({cursor: 'pointer'});

        button.on('pointerover', () => {
            button.setFrame(startingFrame + 2);
        })        
        button.on('pointerout', () => {
            button.setFrame(startingFrame);
        })   
        button.on('pointerdown', () => {
            button.setFrame(startingFrame + 1);
        })    
        button.on('pointerup', () => {
            this.scene.start(scene);
        })     
    }

    update() {
        
    }

}

export default LevelSelectScene;