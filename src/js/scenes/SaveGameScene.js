import BaseScene from './BaseScene.js';

class SaveGameScene extends BaseScene {

    constructor() {
        super('SaveGameScene');
    }

    preload() {
        this.backgroundPreload();

        this.load.image('SaveGameMenu', 'src/assets/images/icons/SaveGameMenu.png');
        this.load.spritesheet('loadSave1', 'src/assets/images/icons/loadSave1.png', {frameWidth: 208, frameHeight: 36});
        this.load.spritesheet('loadSave2', 'src/assets/images/icons/loadSave2.png', {frameWidth: 208, frameHeight: 36});
        this.load.spritesheet('loadSave3', 'src/assets/images/icons/loadSave3.png', {frameWidth: 208, frameHeight: 36});
        this.load.spritesheet('backButton', 'src/assets/images/icons/backButton.png', {frameWidth: 96, frameHeight: 36});
    }

    create() {
        this.backgroundCreate();

        this.add.image(400, 300, 'SaveGameMenu').setOrigin(0.5);

        if (localStorage.getItem('saveSlot1')) {
            this.saveSlot1 = JSON.parse(localStorage.getItem('saveSlot1'));
        }
        if (localStorage.getItem('saveSlot2')) {
            this.saveSlot2 = JSON.parse(localStorage.getItem('saveSlot2'));
        }
        if (localStorage.getItem('saveSlot3')) {
            this.saveSlot3 = JSON.parse(localStorage.getItem('saveSlot3'));
        }

        //Create Buttons
        const loadSave1 = this.add.sprite(400, 250, 'loadSave1')
            .setOrigin(0.5);
        this.add.text(475, 250, `${this.saveSlot1.completed}/3`, {
            fontSize: '20px',
            fill: '#000000'
        })
            .setOrigin(0.5);
        const loadSave2 = this.add.sprite(400, 300, 'loadSave2')
            .setOrigin(0.5);
        this.add.text(475, 300, `${this.saveSlot2.completed}/3`, {
            fontSize: '20px', 
            fill: '#000000'
        })
            .setOrigin(0.5);
        const loadSave3 = this.add.sprite(400, 350, 'loadSave3')
            .setOrigin(0.5);
        this.add.text(475, 350, `${this.saveSlot3.completed}/3`, {
            fontSize: '20px', 
            fill: '#000000'
        })
            .setOrigin(0.5);
        const backButton = this.add.sprite(400, 425, 'backButton');

        this.setButtonInteractions(loadSave1, 'LevelSelectScene', 'saveSlot1', 1);
        this.setButtonInteractions(loadSave2, 'LevelSelectScene', 'saveSlot2', 2);
        this.setButtonInteractions(loadSave3, 'LevelSelectScene', 'saveSlot3', 3);
        this.setButtonInteractions(backButton, 'LevelSelectScene', null);
    }

    setButtonInteractions(button, scene, saveSlot, saveSlotNumber) {
        button.setInteractive({cursor: 'pointer'}).setOrigin(0.5);

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
            localStorage.setItem(saveSlot, JSON.stringify({
                levelOne: this.registry.get('playerData').levelOne,
                levelTwo: this.registry.get('playerData').levelTwo,
                levelThree: this.registry.get('playerData').levelThree,
                saveSlot: saveSlotNumber,
                completed: this.countCompleted()
            }))
            this.scene.start(scene)
        })     
    }

    countCompleted() {
        let completed = 0;
        if (this.registry.get('playerData').levelOne) completed += 1;
        if (this.registry.get('playerData').levelTwo) completed += 1;
        if (this.registry.get('playerData').levelThree) completed += 1;
        return completed
    }
}

export default SaveGameScene;