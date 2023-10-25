class DemoLevelScene extends Phaser.Scene {
    constructor() {
        super({ key: 'DemoLevelScene' });
    }

    //load the Demo_Level map
    preload(){
        this.load.image('ZombieApocalypseTilesetReferenceFixed', 'src/assets/images/tilesets/ZombieApocalypseTilesetReferenceFixed.png');
        this.load.tilemapTiledJSON('demomap', 'src/assets/maps/PathfindingDemoMap.json');
    }

    create() {
        const map = this.make.tilemap({key: 'demomap'});
        console.log('Map:', map);  // Debugging line
        const tileset = map.addTilesetImage('ZombieApocalypseTilesetReferenceFixed', 'ZombieApocalypseTilesetReferenceFixed');
        console.log('Tileset:', tileset);  // Debugging line
        const walkableLayer = map.createLayer('Walkable\/Non-Walkable Layer', tileset);
        console.log('Walkable Layer:', walkableLayer);  // Debugging line
    }

    update () {

    }
}

export default DemoLevelScene;