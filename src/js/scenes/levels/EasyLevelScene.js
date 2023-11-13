// Towers Objects
import Tower1 from "../../objects/towers/Tower1.js"

// Managers
import WaveManager from "../../managers/WaveManager.js";

// Utility Functions
import { loadZombieSpritesheets } from "../../utils/SpritesheetUtil.js";
import GridService from "../../utils/GridUtil.js";
import DisplayManager from "../../managers/DisplayManager.js";

class EasyLevelScene extends Phaser.Scene {
    constructor() {
        super({ key: 'EasyLevelScene' });
        this.grid = null; // Utilize GridService to create the grid
        this.zombies = null; // Zombie container
        this.context = this; // Used for pause menu

        this.displayManager = new DisplayManager(this); // Display Manager
    }

    //load the Demo_Level map
    preload(){
        // Load the tilemap and tileset image
        this.load.image('ZombieApocalypseTilesetReferenceFixed', 'src/assets/images/tilesets/ZombieApocalypseTilesetReferenceFixed.png');
        this.load.tilemapTiledJSON('easymap', 'src/assets/maps/DemoMapWithProps.json');

        // Load the tile related stuff
        this.load.image('tower_hotspot', 'src/assets/images/towers/blue.png');
        this.load.image('tower1', 'src/assets/images/towers/tower1.png');
        this.load.image('tower2', 'src/assets/images/towers/tower2.png');
        this.load.image('tower3', 'src/assets/images/towers/tower3.png');

        // Load spritesheets for zombies
        loadZombieSpritesheets(this);

        // Load Player HUD
        this.load.image('playerHUD', 'src/assets/images/icons/playerHUD.png');
        
        // Pause Menu Items
        this.load.spritesheet('pauseButton', 'src/assets/images/icons/pauseButton.png', {frameWidth: 34, frameHeight: 34});
    }

    create() {
        // Create the map
        const map = this.make.tilemap({key: 'easymap'});
        const tileset = map.addTilesetImage('ZombieApocalypseTilesetReferenceFixed', 'ZombieApocalypseTilesetReferenceFixed');
        
        // Load Layers
        const walkableLayer = map.createLayer('Walkable Layer', tileset); // Used for pathfinding
        const propLayer = map.createLayer('Prop Layer', tileset);
        
        // Debugging map and tileset creation
        console.log('Map:', map);  // Debugging line
        console.log('Tileset:', tileset);  // Debugging line
        console.log('Walkable Layer:', walkableLayer);  // Debugging line

        // Towers-(Randy)------------------------------------------------
        const hotSpotLayer = map.getObjectLayer('HotSpot Layer');
        hotSpotLayer.objects.forEach(object => {
            this.createHotSpot(object);
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
        // 634 is non-walkable tile index (see DemoMapWithProps.json)
        this.grid = new GridService(this, walkableLayer, 634); 
        
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

        // Display Manager
        this.displayManager.create('DemoLevelScene');
    }
    
    update () {
        // Update the zombies
        this.zombies.getChildren().forEach((zombie) => {
            zombie.update();
        });

        // Update the Wave Manager
        this.waveManager.update();

        // Debugging
        console.log(this.zombies.children.entries)
    }

    // create hotspot
    createHotSpot(object) {
        const tower = this.add.sprite(object.x, object.y, 'tower_hotspot');
        tower.setScale(0.02);
        tower.setInteractive();
        tower.on('pointerdown', () => {
            const popUpMenu = this.add.group();
            popUpMenu.setVisible(false);

            const menuBackground = this.add.rectangle(105, 540, 200, 140, 0x333333);
            popUpMenu.add(menuBackground);
            menuBackground.setDepth(0);

            const menuItem1 = this.add.text(10, 490, 'Sniper Tower', {fill: '#ffffff'});
            const menuItem2 = this.add.text(10, 520, 'Missile Tower', {fill: '#ffffff'});
            const menuItem3 = this.add.text(10, 550, 'Flamethrower Tower', {fill: '#ffffff'});
            const menuExit = this.add.text(10, 580, "Cancel", {fill: '#ffffff'});

            popUpMenu.add(menuItem1);
            popUpMenu.add(menuItem2);
            popUpMenu.add(menuItem3);
            popUpMenu.add(menuExit);

            menuItem1.setInteractive();
            menuItem2.setInteractive();
            menuItem3.setInteractive();
            menuExit.setInteractive();

            popUpMenu.setVisible(true);

            menuItem1.on('pointerdown', () => {
                tower.setTexture('tower1');
                tower.setScale(0.1);
                popUpMenu.setVisible(false);
            });

            menuItem2.on('pointerdown', () => {
                tower.setTexture('tower2');
                tower.setScale(0.15);
                popUpMenu.setVisible(false);
            });

            menuItem3.on('pointerdown', () => {
                tower.setTexture('tower3');
                tower.setScale(0.2);
                popUpMenu.setVisible(false);
            });

            menuExit.on('pointerdown', () => {
                popUpMenu.setVisible(false);
            });
        });
    }
}

export default EasyLevelScene;