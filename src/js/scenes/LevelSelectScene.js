class LevelSelectScene extends Phaser.Scene {

    constructor() {
        super('LevelSelectScene');
    }

    preload() {
        this.load.spritesheet('demoLevelButton', 'src/assets/images/icons/demoLevelButton.png', {frameWidth: 128, frameHeight: 48});
        //this.load.spritesheet('levelOneButton', 'src/assets/images/icons/levelOneButton.png', {frameWidth: 128, frameHeight: 48});
        //this.load.spritesheet('levelTwoButton', 'src/assets/images/icons/levelTwoButton.png', {frameWidth: 128, frameHeight: 48});
        //this.load.spritesheet('levelThreeButton', 'src/assets/images/icons/levelThreeButton.png', {frameWidth: 128, frameHeight: 48});
        this.load.spritesheet('saveButton', 'src/assets/images/icons/saveButton.png', {frameWidth: 96, frameHeight: 36});
        this.load.spritesheet('backButton', 'src/assets/images/icons/backButton.png', {frameWidth: 128, frameHeight: 48});
    }

    create() {

        //let playerData = this.registry.get('playerData');
        
        this.add.text(400, 200, 'Level Selection Scene', {fontSize: '36px', fill: '#FFFFFF'})
            .setOrigin(0.5);

        //Create Buttons
        const demoLevelButton = this.add.sprite(400, 300, 'demoLevelButton');
        const saveButton = this.add.sprite(400, 350, 'saveButton');
        const backButton = this.add.sprite(400, 400, 'backButton');
        
        //Call to Set Button Interactions
        this.setButtonInteractions(demoLevelButton, 'DemoLevelScene');
        this.setButtonInteractions(saveButton,);
        this.setButtonInteractions(backButton, 'MenuScene');

    }

    //Sets Button Interactions
    setButtonInteractions(button, scene) {
        button.setInteractive().setOrigin(0.5);

        button.on('pointerover', () => {
            button.setFrame(2);
        })        

        button.on('pointerout', () => {
            button.setFrame(0);
        })   

        button.on('pointerdown', () => {
            button.setFrame(1);
        })    

        button.on('pointerup', () => {
            this.scene.start(scene);
        })     
    }
}

export default LevelSelectScene;