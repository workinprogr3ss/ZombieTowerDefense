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
import GridService from "../utils/GridUtil.js";

class DemoLevelScene extends Phaser.Scene {
    constructor() {
        super({ key: 'DemoLevelScene' });
        this.grid = null; // Utilize GridService to create the grid
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
        const tileset = map.addTilesetImage('ZombieApocalypseTilesetReferenceFixed', 'ZombieApocalypseTilesetReferenceFixed');
        
        // Load Layers
        const walkableLayer = map.createLayer('Walkable Layer', tileset); // Used for pathfinding
        const propLayer = map.createLayer('Prop Layer', tileset);
        const towerLayer = map.createLayer('Tower Layer', tileset);
        
        // Debugging map and tileset creation
        console.log('Map:', map);  // Debugging line
        console.log('Tileset:', tileset);  // Debugging line
        console.log('Walkable Layer:', walkableLayer);  // Debugging line

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

        // Tile Coordinates for pathfinding (in grid)
        const startTileX = 1
        const startTileY = 5
        const endTileX = 47
        const endTileY = 32
        
        // World Coorindates for spawning enemies
        const startX = startTileX * 16; 
        const startY = startTileY * 16;
        const endX = endTileX * 16;
        const endY = endTileY * 16;

        // Create the grid for pathfinding
        this.grid = new GridService(this, walkableLayer); 
        
        // Spawning Debugging
        console.log(`Starting zombie at tile (${startTileX}, ${startTileY})`);
        console.log(`Target destination tile is (${endTileX}, ${endTileY})`); 
        // Pathfinding Debugging
        console.log("Grid dimensions:", this.grid.grid.length, this.grid.grid[0]?.length);
        console.log("Start Tile: ", this.grid.grid[startTileY][startTileX]);
        console.log("End Tile: ", this.grid.grid[endTileY][endTileX]);

        // Zombie container
        this.zombies = this.physics.add.group();

        // Spawning Zombies
        const walkerZombie = new WalkerZombie(this, startX, startY, 'Right');
        const tankZombie = new TankZombie(this, startX, startY, 'Right');
        const runnerZombie = new RunnerZombie(this, startX, startY, 'Right');
        const spitterZombie = new SpitterZombie(this, startX, startY, 'Right');

        // Calculate paths
        walkerZombie.calculatePath(startTileX, startTileY, endTileX, endTileY);
        tankZombie.calculatePath(startTileX, startTileY, endTileX, endTileY);
        runnerZombie.calculatePath(startTileX, startTileY, endTileX, endTileY);
        spitterZombie.calculatePath(startTileX, startTileY, endTileX, endTileY);

        // Add zombies to the container
        this.zombies.add(walkerZombie);
        this.zombies.add(tankZombie);
        this.zombies.add(runnerZombie);
        this.zombies.add(spitterZombie);
    }
    
    update () {
        // Update the zombies
        this.zombies.getChildren().forEach((zombie) => {
            zombie.update();
        });
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