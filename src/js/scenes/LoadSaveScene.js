class LoadSaveScene extends Phaser.Scene {

    constructor() {
        super('LoadSaveScene');
    }

    preload() {
        this.load.spritesheet('backButton', 'src/assets/images/icons/backButton.png', {frameWidth: 128, frameHeight: 48});
    }

    create() {
        //On press
        //Check Local Storage for Data
        this.registry.set('playerData', {
            levelOne: true,
            levelTwo: true,
            levelThree: true,
        });
        //Go to LevelSelect

        this.add.text(400, 200, 'Load Save Scene', {fontSize: '36px', fill: '#FFFFFF'})
            .setOrigin(0.5);

        //Create Buttons
        const backButton = this.add.sprite(400, 300, 'backButton');
        
        //Call to Set Button Interactions
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

export default LoadSaveScene;