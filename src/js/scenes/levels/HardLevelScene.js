// Towers Objects
import { createHotSpot } from "./HotSpot.js";

// Managers
import WaveManager from "../../managers/WaveManager.js";
import DisplayManager from "../../managers/DisplayManager.js";
import AudioManager from "../../managers/AudioManager.js";

// Utility Functions
import { loadSpritesheets } from "../../utils/SpritesheetUtil.js";
import { loadImages } from "../../utils/ImageLoaderUtil.js";
import GridService from "../../utils/GridUtil.js";

class HardLevelScene extends Phaser.Scene {
    constructor() {
        super({ key: 'HardLevelScene' });
        this.grid = null; // Utilize GridService to create the grid
        
        // Objects
        this.zombies = null; // Zombie container
        this.towers = []; // Tower container

        this.context = this; // Used for pause menu

        // Managers
        this.displayManager = new DisplayManager(this); // Display Manager

        //Group of Tower Menus
        this.towerMenuGroup = []
        
        //Group of Upgrade Menus
        this.upgradeMenuGroup = [];
    }

    //load the Hard map
    preload(){
        // Load the tilemap and tileset image
        this.load.image('ZombieApocalypseTilesetReferenceFixed', 'src/assets/images/tilesets/ZombieApocalypseTilesetReferenceFixed.png');
        this.load.tilemapTiledJSON('hardmap', 'src/assets/maps/NewHardLevel.json');

        // Load visual assets
        loadSpritesheets(this);
        loadImages(this);

        // Pause Menu Items
        this.load.spritesheet('pauseButton', 'src/assets/images/icons/pauseButton.png', {frameWidth: 34, frameHeight: 34});
    }

    create(audioManager) {
        // Set the audio manager
        //this.audioManager = audioManager;
        //this.audioManager.stopBackgroundAudio();
        //audioManager.stopNewsAudio();

        //console.log("Created Level Three")

        // Create the map
        const map = this.make.tilemap({key: 'hardmap'});
        const tileset = map.addTilesetImage('ZombieApocalypseTilesetReferenceFixed', 'ZombieApocalypseTilesetReferenceFixed');
        
        // Load Layers
        const walkableLayer = map.createLayer('Walkable Layer', tileset); // Used for pathfinding
        const roadLayer = map.createLayer('Road Layer', tileset);
        const buildingLayer = map.createLayer('Building Layer', tileset);
        const grassLayer = map.createLayer('Grass Layer', tileset);
        const propLayer = map.createLayer('Prop Layer', tileset);
        
        // Debugging map and tileset creation
        //console.log('Map:', map);  // Debugging line
        //console.log('Tileset:', tileset);  // Debugging line
        //console.log('Walkable Layer:', walkableLayer);  // Debugging line

        // Create Tower HotSpots
        const hotSpotLayer = map.getObjectLayer('HotSpot Layer');
        hotSpotLayer.objects.forEach(object => {
            createHotSpot(object, this, this.displayManager, audioManager);
        });

        // Tile Coordinates for pathfinding (in grid)
        const startTileX = 2
        const startTileY = 3
        const endTileX = 2
        const endTileY = 34
        
        // World Coorindates for spawning enemies
        const startX = startTileX * 16; 
        const startY = startTileY * 16;
        const endX = endTileX * 16;
        const endY = endTileY * 16;

        // Create the grid for pathfinding
        // Num Array is non-walkable tile indexes (see DemoMapWithProps.json)
        this.grid = new GridService(this, walkableLayer, [545]); 
        
        // Spawning Debugging
        //console.log(`Starting zombie at tile (${startTileX}, ${startTileY})`);
        //console.log(`Target destination tile is (${endTileX}, ${endTileY})`); 
        
        // Pathfinding Debugging
        //console.log("Grid dimensions:", this.grid.grid.length, this.grid.grid[0]?.length);
        //console.log("Start Tile: ", this.grid.grid[startTileY][startTileX]);
        //console.log("End Tile: ", this.grid.grid[endTileY][endTileX]);

        // Zombie Container
        this.zombies = this.physics.add.group(); // Zombie container
        this.waveManager = new WaveManager(this, startTileX, startTileY, endTileX, endTileY, 3, audioManager);
        //console.log("Wave Manager:", this.waveManager);

        // Tower Container
        this.towers = this.physics.add.group();

        // Display Manager
        this.displayManager.create('HardLevelScene', this.zombies, this.towers);
        this.displayManager.waveTimerManager.resetTimer()
    }
    
    update (time, delta) {
        // Update the zombies
        this.zombies.getChildren().forEach((zombie) => {
            zombie.update();
        });

        // Update the Wave Manager
        this.waveManager.update();

        // Update the Wave Timer Manager
        this.displayManager.waveTimerManager.update(delta);

        // Update the towers
        if (this.zombies) {
            this.towers.getChildren().forEach((tower) => {
                tower.attack(this.zombies.children.entries);
                tower.update();
            });
        }

        // Debugging
        //console.log(this.zombies.children.entries)
    }
}

export default HardLevelScene;