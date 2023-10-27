class MenuScene extends Phaser.Scene {
    
    constructor() {
        super('MenuScene');
    }
    
    preload() {
        //this.load.tilemapTiledJSON('map', 'src/assets/maps/menu.json');
        //this.load.image('Barn1', 'src/assets/images/tilesets/Barn1.png');
        //this.load.image('Building', 'src/assets/images/tilesets/Building.png');
        //this.load.image('Ground', 'src/assets/images/tilesets/Ground.png');
        //this.load.image('Roads', 'src/assets/images/tilesets/Roads.png');
        //this.load.image('Signs', 'src/assets/images/tilesets/Signs.png');
        //this.load.image('Zombies', 'src/assets/images/tilesets/Zombies.png');

        this.load.spritesheet('newGameButton', 'src/assets/images/icons/newGameButton.png', {frameWidth: 128, frameHeight: 48});
        this.load.spritesheet('loadGameButton', 'src/assets/images/icons/loadGameButton.png', {frameWidth: 128, frameHeight: 48});
        this.load.spritesheet('settingsButton', 'src/assets/images/icons/settingsButton.png', {frameWidth: 128, frameHeight: 48});
    }

    create() {
        //const map = this.make.tilemap({key: 'map'});
        //const barn1 = map.addTilesetImage('Barn1', 'Barn1');
        //const building = map.addTilesetImage('Building', 'Building');
        //const ground = map.addTilesetImage('Ground', 'Ground');
        //const roads = map.addTilesetImage('Roads', 'Roads');
        //const signs = map.addTilesetImage('Signs', 'Signs');
        //const zombies = map.addTilesetImage('Zombies', 'Zombies');
        //map.createLayer('GroundLayer', ground);
        //map.createLayer('RoadLayer', roads);
        //map.createLayer('BuildingLayer', building);
        //map.createLayer('BarnLayer', barn1);
        //map.createLayer('ZombieLayer', zombies);
        //map.createLayer('SignLayer', signs);

        //Create Buttons
        const newGameButton = this.add.sprite(400, 300, 'newGameButton');
        const loadGameButton = this.add.sprite(400, 350, 'loadGameButton');
        const settingsButton = this.add.sprite(400, 400, 'settingsButton');
        
        //Call to Set Button Interactions
        this.setButtonInteractions(newGameButton, 'LevelSelectScene');
        this.setButtonInteractions(loadGameButton, 'LoadSaveScene');
        this.setButtonInteractions(settingsButton, 'SettingsScene');

        //Game Title
        this.add.text(400, 200, 'Post-Pandemic Perimeter', {fontSize: '36px', fill: '#FFFFFF'})
            .setOrigin(0.5);

        //Create PlayerData Registry
        this.registry.set('playerData', {
            levelOne: true,
            levelTwo: false,
            levelThree: false,
        });
    }

    //Sets Button Interactions
    setButtonInteractions(button, scene) {
        button.setInteractive().setOrigin(0.5);

        button.on('pointerover', () => {
            button.setFrame(2);
        })        

        button.on('pointerout', () => {
            button.setFrame(0);
        })   

        button.on('pointerdown', () => {
            button.setFrame(1);
        })    

        button.on('pointerup', () => {
            this.scene.start(scene);
        })     
    }
}

export default MenuScene;