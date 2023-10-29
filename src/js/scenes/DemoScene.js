import Enemy from "../objects/enemies/EnemyObject.js";
import WalkerZombie from "../objects/enemies/WalkerZombie.js";
import { findPath } from "../utils/PathfindingUtil.js";

class DemoLevelScene extends Phaser.Scene {
    constructor() {
        super({ key: 'DemoLevelScene' });
    }

    //load the Demo_Level map
    preload(){
        this.load.image('ZombieApocalypseTilesetReferenceFixed', 'src/assets/images/tilesets/ZombieApocalypseTilesetReferenceFixed.png');
        this.load.tilemapTiledJSON('demomap', 'src/assets/maps/DemoMap.json');
        this.load.spritesheet('zombies', 'src/assets/images/tilesets/ZombieApocalypseTilesetReferenceFixed.png', {frameWidth: 16, frameHeight: 16})
    }

    create() {
        // Create the map
        const map = this.make.tilemap({key: 'demomap'});
        console.log('Map:', map);  // Debugging line
        const tileset = map.addTilesetImage('ZombieApocalypseTilesetReferenceFixed', 'ZombieApocalypseTilesetReferenceFixed');
        console.log('Tileset:', tileset);  // Debugging line
        const walkableLayer = map.createLayer('Walkable Layer', tileset);
        console.log('Walkable Layer:', walkableLayer);  // Debugging line

        // Create the grid for A* pathfinding
        let grid = [];
        walkableLayer.forEachTile((tile) => {
            const x = tile.x;
            const y = tile.y;
            
            // Initialize this row if needed
            if (!grid[y]) {
                grid[y] = [];
            };

            //Set the grid value of whether the tile is walkable or not
            grid[y][x] = tile.index === 634 ? 1 : 0; // 1 is non-walkable, 0 is walkable
        });
        console.log("Grid:", grid);  // Debugging line

        // Find a path

        // Spawning a zombie
        const zombie = new WalkerZombie(this, 0, 0, 'zombies', 100, 2);
    }

    update () {

    }
}

export default DemoLevelScene;