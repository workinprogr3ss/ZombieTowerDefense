// Base scene for common functions and scripts used in multiple scenes

import AudioManager from "../managers/AudioManager.js";
class BaseScene extends Phaser.Scene {

    constructor(key) {
        super(key);

        this.saveSlot1 = {};
        this.slot1Text = '-';
        this.saveSlot2 = {};
        this.slot2Text = '-';
        this.saveSlot3 = {};
        this.slot3Text = '-';

        this.fontStyling = {
            fontSize: '20px',
            fill: '#000000'
        };
    }

    backgroundCreate() {
        const map = this.make.tilemap({key: 'menuBackground'});
        const tileSet = map.addTilesetImage('ZombieApocalypseTilesetReferenceFixed', 'ZombieApocalypseTilesetReferenceFixed');
        map.createLayer('Ground', tileSet);
        map.createLayer('Buildings', tileSet);
        map.createLayer('Foliage', tileSet);
        map.createLayer('Fences', tileSet);
        map.createLayer('Accessories', tileSet);
    }

    checkStorage() {
        if (JSON.parse(localStorage.getItem('saveSlot1')) != null) {
            if (JSON.parse(localStorage.getItem('saveSlot1')).active) {
                this.saveSlot1 = JSON.parse(localStorage.getItem('saveSlot1'));
                this.slot1Text = `${this.saveSlot1.completed}/3`
            }
        } else {
            this.slot1Text = '-';
            this.saveSlot1 = {};
        }
        if (JSON.parse(localStorage.getItem('saveSlot2')) != null) {
            if (JSON.parse(localStorage.getItem('saveSlot2')).active) {
                this.saveSlot2 = JSON.parse(localStorage.getItem('saveSlot2'));
                this.slot2Text = `${this.saveSlot2.completed}/3`
            }
        } else {
            this.slot2Text = '-';
            this.saveSlot2 = {};
        }
        if (JSON.parse(localStorage.getItem('saveSlot3')) != null) {
            if (JSON.parse(localStorage.getItem('saveSlot3')).active) {
                this.saveSlot3 = JSON.parse(localStorage.getItem('saveSlot3'));
                this.slot3Text = `${this.saveSlot3.completed}/3`
            }
        } else {
            this.slot3Text = '-';
            this.saveSlot3 = {};
        }
    }

    //Sets Button Interactions
    setButtonInteractions(button, scene, data, startingFrame, unlock, source, slot, audio) {
        button.setInteractive({cursor: 'pointer'}).setOrigin(0.5);

        if (unlock) {
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
                if (source == 'loadScene') {
                    this.registry.set('playerData', {
                        levelOne: data.levelOne,
                        levelOneCompleted: data.levelOneCompleted,
                        levelTwo: data.levelTwo,
                        levelTwoCompleted: data.levelTwoCompleted,
                        levelThree: data.levelThree,
                        levelThreeCompleted: data.levelThreeCompleted,
                        saveSlot: data.saveSlot,
                        completed: data.completed,
                    });
                    if (data.active) {
                        this.scene.start(scene, audio)
                    }
                    return
                } 
                if (source == 'saveGameScene') {
                    if (data.active) {
                        this.scene.start('OverrideScene', slot);
                        return
                    }
                    localStorage.setItem(`saveSlot${slot}`, JSON.stringify({
                        levelOne: this.registry.get('playerData').levelOne,
                        levelOneCompleted: this.registry.get('playerData').levelOneCompleted,
                        levelTwo: this.registry.get('playerData').levelTwo,
                        levelTwoCompleted: this.registry.get('playerData').levelTwoCompleted,
                        levelThree: this.registry.get('playerData').levelThree,
                        levelThreeCompleted: this.registry.get('playerData').levelThreeCompleted,
                        saveSlot: slot,
                        completed: this.countCompleted(),
                        active: true
                    }))
                    this.scene.start(scene);
                }
                this.scene.start(scene, audio);
            })     
        }
    }
    
    countCompleted() {
        let comp = 0
        if (this.registry.get('playerData').levelOneCompleted) {
            comp += 1
        }
        if (this.registry.get('playerData').levelTwoCompleted) {
            comp += 1
        }
        if (this.registry.get('playerData').levelThreeCompleted) {
            comp += 1
        }
        return comp
    }
}

export default BaseScene;