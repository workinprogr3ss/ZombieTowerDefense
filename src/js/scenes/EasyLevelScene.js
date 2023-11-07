class EasyLevelScene extends Phaser.Scene {

    constructor() {
        super({ key: 'EasyLevelScene' });
    }

    // load the Easy_Level map
    preload() {
        this.load.image("color_tiles", 'src/assets/images/tilesets/color_tiles.png');
        this.load.tilemapTiledJSON('easymap', 'src/assets/maps/Easy_Level.json');
    }

    // create and display the Easy_Level map
    create() {
        const map = this.make.tilemap({key: 'easymap', tileWidth: 32, tileHeight: 32});
        const tileset = map.addTilesetImage("color_tiles1", "color_tiles");
        const layer = map.createLayer("TopLayer", tileset, 0, 0);
    }
}

export default EasyLevelScene;