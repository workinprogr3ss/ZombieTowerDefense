// Enemy Objects
import Enemy from "../objects/enemies/EnemyObject.js";
import WalkerZombie from "../objects/enemies/WalkerZombie.js";
import RunnerZombie from "../objects/enemies/RunnerZombie.js";
import TankZombie from "../objects/enemies/TankZombie.js";
import SpitterZombie from "../objects/enemies/SpitterZombie.js";

// Towers Objects
import Tower1 from "../objects/towers/Tower1.js"

// Utility Functions
import { findPath } from "../utils/PathfindingUtil.js";
import { loadZombieSpritesheets } from "../utils/spritesheetLoader.js";

class DemoLevelScene extends Phaser.Scene {
    constructor() {
        super({ key: 'DemoLevelScene' });
    }

    //load the Demo_Level map
    preload(){
        // Load the tilemap and tileset image
        this.load.image('ZombieApocalypseTilesetReferenceFixed', 'src/assets/images/tilesets/ZombieApocalypseTilesetReferenceFixed.png');
        this.load.tilemapTiledJSON('demomap', 'src/assets/maps/DemoMapWithProps.json');

        // (Randy)
        this.load.image('tower_hotspot', 'src/assets/images/towers/blue.png');
        this.load.image('tower_ui', 'src/assets/images/towers/menu.png');
        this.load.image('tower1', 'src/assets/images/towers/tower1.png');

        // Load spritesheets for zombies
        loadZombieSpritesheets(this);
    }

    create() {
        // Create the map
        const map = this.make.tilemap({key: 'demomap'});
        console.log('Map:', map);  // Debugging line
        const tileset = map.addTilesetImage('ZombieApocalypseTilesetReferenceFixed', 'ZombieApocalypseTilesetReferenceFixed');
        console.log('Tileset:', tileset);  // Debugging line
        const walkableLayer = map.createLayer('Walkable Layer', tileset);
        console.log('Walkable Layer:', walkableLayer);  // Debugging line
        map.createLayer('Prop Layer', tileset);
        map.createLayer('Tower Layer', tileset);
        

        // Towers-(Randy)------------------------------------------------
        const tower_hotspot = this.add.sprite(400, 304, 'tower_hotspot').setInteractive();
        tower_hotspot.setScale(0.05);
        const tower_ui = this.add.sprite(100, 560, 'tower_ui');
        tower_ui.setScale(0.2, 0.2);

        const tower1_select = this.add.sprite(60, 560, 'tower1').setInteractive();
        tower1_select.setScale(0.15);

        tower1_select.on('pointerdown', () => {
            this.createNewSprite();
        });
        // Towers-(Randy)------------------------------------------------

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

        // World Coorindates for spawning enemies
        const startX = 1 * 16;
        const startY = 5 * 16;
        const endX = 47 * 16;
        const endY = 32 * 16;
        // Tile Coordinates for pathfinding
        const startTileX = startX / 16;
        const startTileY = startY / 16;
        const endTileX = endX / 16;
        const endTileY = endY / 16;
        
        // Spawning Debugging
        console.log(`Starting zombie at tile (${startTileX}, ${startTileY})`);
        console.log(`Target destination tile is (${endTileX}, ${endTileY})`); 
        // Pathfinding Debugging
        console.log("Grid dimensions:", grid.length, grid[0]?.length);
        console.log("Start Tile: ", grid[startTileY][startTileX]);
        console.log("End Tile: ", grid[endTileY][endTileX]);

        // Spawning a zombie
        const walkerZombie = new WalkerZombie(this, startX, startY, 'Right');
        const tankZombie = new TankZombie(this, startX, startY, 'Right');
        const runnerZombie = new RunnerZombie(this, startX, startY, 'Right');
        const spitterZombie = new SpitterZombie(this, startX, startY, 'Right');


        // Find the path (asynchronous)
        findPath(grid, startTileX, startTileY, endTileX, endTileY,  (path, error) => {
            if (error) {
                console.log("Error finding path:", error);
            } else {
                console.log("Path found:", path);
            }

            // Move the zombie along the path
            // Had to move inside the find the path due to the asynchronous nature of the function
            if (path) {
                walkerZombie.moveAlongPath(this, path);
                tankZombie.moveAlongPath(this, path);
                runnerZombie.moveAlongPath(this, path);
                spitterZombie.moveAlongPath(this, path);
            }
        });
    }
    

    update () {

    }

    // create new sprites
    createNewSprite() {
        const tower1 = this.add.sprite(60, 560, 'tower1').setInteractive();
        tower1.setScale(0.15);
        
        // make the towers draggable
        this.input.setDraggable(tower1);

        this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
            gameObject.x = dragX;
            gameObject.y = dragY;
        });
    }
}

export default DemoLevelScene;