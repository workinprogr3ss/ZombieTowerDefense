// Base scene for common functions and scripts used in multiple scenes

class BaseScene extends Phaser.Scene {

    constructor(key) {
        super(key);
    }

    backgroundPreload() {
        this.load.tilemapTiledJSON('menuBackground', 'src/assets/maps/menuBackground.json');
        this.load.image('ZombieApocalypseTilesetReferenceFixed', 'src/assets/images/tilesets/ZombieApocalypseTilesetReferenceFixed.png');
    }

    backgroundCreate() {
        const map = this.make.tilemap({key: 'menuBackground'});
        const tileSet = map.addTilesetImage('ZombieApocalypseTilesetReferenceFixed', 'ZombieApocalypseTilesetReferenceFixed');
        map.createLayer('Ground', tileSet);
        map.createLayer('Buildings', tileSet);
        map.createLayer('Fences', tileSet);
        map.createLayer('Accessories', tileSet);
    }

    //Sets Button Interactions
    setButtonInteractions(button, scene, data, startingFrame, unlock) {
        button.setInteractive({cursor: 'pointer'}).setOrigin(0.5);

        if (unlock) {
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
                if (data) {
                    this.registry.set('playerData', {
                        levelOne: data.levelOne,
                        levelTwo: data.levelTwo,
                        levelThree: data.levelThree,
                        saveSlot: data.saveSlot,
                        completed: data.completed,
                    });
                    if (data.active) {
                        console.log(data.active)
                        this.scene.start(scene)
                    }
                    return
                }   
                this.scene.start(scene)
            })     
        }
    }
}

export default BaseScene;