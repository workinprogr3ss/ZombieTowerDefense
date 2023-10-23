import BaseScene from './BaseScene.js';

class MenuScene extends BaseScene {
    
    constructor() {
        super('MenuScene');

        this.menu = [
            {scene: 'LevelSelectScene', text: 'New Game'},
            {scene: 'LoadSaveScene', text: 'Load Game'},
            {scene: 'SettingsScene', text: 'Settings'}
        ];
    }
    
    preload() {
        this.load.tilemapTiledJSON('map', 'src/assets/maps/menu.json');
        this.load.image('Barn1', 'src/assets/images/tilesets/Barn1.png');
        this.load.image('Building', 'src/assets/images/tilesets/Building.png');
        this.load.image('Ground', 'src/assets/images/tilesets/Ground.png');
        this.load.image('Roads', 'src/assets/images/tilesets/Roads.png');
        this.load.image('Signs', 'src/assets/images/tilesets/Signs.png');
        this.load.image('Zombies', 'src/assets/images/tilesets/Zombies.png');
    }

    create() {
        const map = this.make.tilemap({key: 'map'});
        const barn1 = map.addTilesetImage('Barn1', 'Barn1');
        const building = map.addTilesetImage('Building', 'Building');
        const ground = map.addTilesetImage('Ground', 'Ground');
        const roads = map.addTilesetImage('Roads', 'Roads');
        const signs = map.addTilesetImage('Signs', 'Signs');
        const zombies = map.addTilesetImage('Zombies', 'Zombies');
        map.createLayer('GroundLayer', ground);
        map.createLayer('RoadLayer', roads);
        map.createLayer('BuildingLayer', building);
        map.createLayer('BarnLayer', barn1);
        map.createLayer('ZombieLayer', zombies);
        map.createLayer('SignLayer', signs);

        this.add.text(400, 200, 'Post-Pandemic Perimeter', {fontSize: '36px', fill: '#FFFFFF'})
            .setOrigin(0.5);

        // Creates Menu
        this.createLinks(this.menu, (menuItem) => this.createEvents(menuItem));
    }
}

export default MenuScene;