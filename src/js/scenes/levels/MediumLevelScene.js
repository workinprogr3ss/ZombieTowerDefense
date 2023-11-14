// Towers Objects
import { createHotSpot } from "./HotSpot.js";

// Managers
import WaveManager from "../../managers/WaveManager.js";

// Utility Functions
import { loadSpritesheets } from "../../utils/SpritesheetUtil.js";
import GridService from "../../utils/GridUtil.js";
import DisplayManager from "../../managers/DisplayManager.js";

class MediumLevelScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MediumLevelScene' });
        this.grid = null; // Utilize GridService to create the grid
        this.zombies = null; // Zombie container
        this.context = this; // Used for pause menu
        
        this.displayManager = new DisplayManager(this); // Display Manager
    }

    //load the Medium map
    preload(){
        // Load the tilemap and tileset image
        this.load.image('ZombieApocalypseTilesetReferenceFixed', 'src/assets/images/tilesets/ZombieApocalypseTilesetReferenceFixed.png');
        this.load.tilemapTiledJSON('mediummap', 'src/assets/maps/MediumLevel.json');

        // Load spritesheets for zombies
        loadSpritesheets(this);

        // Load towers
        this.load.image('hotspot', 'src/assets/images/towers/hotspot.png');
        this.load.image('sniper_tower', 'src/assets/images/towers/sniper_tower.png');
        this.load.image('missile_tower', 'src/assets/images/towers/missile_tower.png');
        this.load.image('flamethrower_tower', 'src/assets/images/towers/flamethrower_tower.png');

        // Load Player HUD
        this.load.image('playerHUD', 'src/assets/images/icons/playerHUD.png');

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
        //const towerLayer = map.createLayer('Tower Layer', tileset);
        
        // Debugging map and tileset creation
        console.log('Map:', map);  // Debugging line
        console.log('Tileset:', tileset);  // Debugging line
        console.log('Walkable Layer:', walkableLayer);  // Debugging line

        // Create Tower HotSpots
        const hotSpotLayer = map.getObjectLayer('HotSpot Layer');
        hotSpotLayer.objects.forEach(object => {
            createHotSpot(object, this);
        });

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

        // Zombie Container
        this.zombies = this.physics.add.group(); // Zombie container
        this.waveManager = new WaveManager(this, startTileX, startTileY, endTileX, endTileY);
        console.log("Wave Manager:", this.waveManager);

        this.displayManager.create('MediumLevelScene');
    }
    
    update () {
        // Update the zombies
        this.zombies.getChildren().forEach((zombie) => {
            zombie.update();
        });

        // Update the wave manager
        this.waveManager.update();

        // Debugging
        //console.log(this.zombies.children.entries)
    }
}

export default MediumLevelScene;