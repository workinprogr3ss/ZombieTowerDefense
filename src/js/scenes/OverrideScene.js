//Scene Functions
import BaseScene from './BaseScene.js';

//Utility Functions
import { PreloadOverrideGraphics } from '../utils/PreloadGraphics.js';

class OverrideScene extends BaseScene {

    constructor() {
        super('OverrideScene');
    }

    preload() {
        //Load Override Graphics
        PreloadOverrideGraphics(this);
     }

    create(slot) {
        //Create Background Image
        this.backgroundCreate();

        //Create Menu Background
        this.add.image(400, 300, 'SaveGameMenuBG').setOrigin(0.5);

        //Check Local Storage for Data
        this.checkStorage()

        //Create Background Buttons
        this.add.sprite(400, 250, 'loadSave1BG').setOrigin(0.5);
        this.add.text(475, 250, `${this.slot1Text}`, this.fontStyling).setOrigin(0.5);

        this.add.sprite(400, 350, 'loadSave3BG').setOrigin(0.5);
        this.add.text(475, 350, `${this.slot3Text}`, this.fontStyling).setOrigin(0.5);

        //Create Override Background and Buttons
        this.add.image(400, 300, 'overrideMenu').setOrigin(0.5);
        const yesButton = this.add.image(350, 320, 'yes').setInteractive({cursor: 'pointer'}).setOrigin(0.5);
        const noButton = this.add.image(450, 320, 'no').setInteractive({cursor: 'pointer'}).setOrigin(0.5);

        //Call to Set Button Interactions
        this.checkOverride(yesButton, 'SaveGameScene', slot, true);
        this.checkOverride(noButton, 'SaveGameScene', slot, false);
    }

    checkOverride(button, scene, slot, save) {
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
            if (save == false) {
                this.scene.start(scene);
            } else {
                localStorage.setItem(`saveSlot${slot}`, JSON.stringify({
                    levelOne: this.registry.get('playerData').levelOne,
                    levelTwo: this.registry.get('playerData').levelTwo,
                    levelThree: this.registry.get('playerData').levelThree,
                    saveSlot: slot,
                    completed: this.countCompleted(),
                    active: true
                }))
                this.scene.start(scene);
            }
        })
    }
}

export default OverrideScene;