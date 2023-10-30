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
}

export default BaseScene;