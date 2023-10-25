//import { findPath } from "../utils/PathfindingUtil.js";

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

        let grid = [];

        walkableLayer.forEachTile((tile) => {
            const x = tile.x;
            const y = tile.y;
            
            // Initialize this row if needed
            if (!grid[y]) {
                grid[y] = [];
            };

            //Set the grid value of whether the tile is walkable or not
            grid[y][x] = tile.index === 662 ? 1 : 0; // 1 is non-walkable, 0 is walkable
        });
        console.log("Grid:", grid);  // Debugging line
    }

    update () {

    }
}

export default DemoLevelScene;