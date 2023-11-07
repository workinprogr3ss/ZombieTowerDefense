// Enemy Objects
import Enemy from "../objects/enemies/EnemyObject.js";
import WalkerZombie from "../objects/enemies/WalkerZombie.js";
import RunnerZombie from "../objects/enemies/RunnerZombie.js";
import TankZombie from "../objects/enemies/TankZombie.js";
import SpitterZombie from "../objects/enemies/SpitterZombie.js";

// Towers Objects
import Tower1 from "../objects/towers/Tower1.js"

// Managers
import WaveManager from "../managers/waveManager.js";

// Utility Functions
import { findPath } from "../utils/PathfindingUtil.js";
import { loadZombieSpritesheets } from "../utils/SpritesheetUtil.js";
import GridService from "../utils/GridUtil.js";

class MediumLevelScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MediumLevelScene' });
        this.grid = null; // Utilize GridService to create the grid
        this.zombies = null; // Zombie container
        this.context = this;
    }

    //load the Demo_Level map
    preload(){
        // Load the tilemap and tileset image
        this.load.image('ZombieApocalypseTilesetReferenceFixed', 'src/assets/images/tilesets/ZombieApocalypseTilesetReferenceFixed.png');
        this.load.tilemapTiledJSON('mediummap', 'src/assets/maps/MediumLevel.json');

        // Load spritesheets for zombies
        loadZombieSpritesheets(this);

        // Pause Menu Items
        this.load.spritesheet('pauseButton', 'src/assets/images/icons/pauseButton.png', {frameWidth: 34, frameHeight: 34});
    }

    create() {
        // Create the map
        const map = this.make.tilemap({key: 'mediummap'});
        const tileset = map.addTilesetImage('ZombieApocalypseTilesetReferenceFixed', 'ZombieApocalypseTilesetReferenceFixed');
        
        // Load Layers
        const walkableLayer = map.createLayer('Walkable Layer', tileset); // Used for pathfinding
        const buildingLayer = map.createLayer('Buildings Layer', tileset);
        const propLayer = map.createLayer('Prop Layer', tileset);
        const towerLayer = map.createLayer('Tower Layer', tileset);
        
        // Debugging map and tileset creation
        console.log('Map:', map);  // Debugging line
        console.log('Tileset:', tileset);  // Debugging line
        console.log('Walkable Layer:', walkableLayer);  // Debugging line

        // Tile Coordinates for pathfinding (in grid)
        const startTileX = 2
        const startTileY = 35
        const endTileX = 47
        const endTileY = 2
        
        // World Coorindates for spawning enemies
        const startX = startTileX * 16; 
        const startY = startTileY * 16;
        const endX = endTileX * 16;
        const endY = endTileY * 16;

        // Create the grid for pathfinding
        this.grid = new GridService(this, walkableLayer, 545); 
        
        // Spawning Debugging
        console.log(`Starting zombie at tile (${startTileX}, ${startTileY})`);
        console.log(`Target destination tile is (${endTileX}, ${endTileY})`); 
        // Pathfinding Debugging
        console.log("Grid dimensions:", this.grid.grid.length, this.grid.grid[0]?.length);
        console.log("Start Tile: ", this.grid.grid[startTileY][startTileX]);
        console.log("End Tile: ", this.grid.grid[endTileY][endTileX]);

        // Zombie container
        this.zombies = this.physics.add.group(); // Zombie container
        this.waveManager = new WaveManager(this, startTileX, startTileY, endTileX, endTileY);
        console.log("Wave Manager:", this.waveManager);

        //Pause Button
        const pauseButton = this.add.image(760,30, 'pauseButton').setInteractive({cursor: 'pointer'}).setOrigin(0.5);
        pauseButton.on('pointerdown', () => {pauseButton.setFrame(1)});
        pauseButton.on('pointerout', () => {pauseButton.setFrame(0)});
        pauseButton.on('pointerup', () => {
            this.scene.launch('PauseScene', {context: this.context, scene: 'MediumLevelScene'});
            this.scene.bringToTop('PauseScene')
        }); 
    }
    
    update () {
        // Update the zombies
        this.zombies.getChildren().forEach((zombie) => {
            zombie.update();
        });

        // Update the wave manager
        this.waveManager.update();
    }
}

export default MediumLevelScene;