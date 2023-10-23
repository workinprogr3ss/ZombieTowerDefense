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
        //this.load.tilemapTiledJSON('map', 'src/assets/maps/menu.json');
        //this.load.image('tiles-1', 'src/assets/images/tilesets/tileSet1.png');
    }

    create() {
        //const map = this.make.tilemap({key: 'map'});
        //const tileset1 = map.addTilesetImage('Zombie Apocalypse Tileset Reference', 'tiles-1');
        //map.createLayer('Tile Layer 1', tileset1);

        this.add.text(400, 200, 'Post-Pandemic Perimeter', {fontSize: '36px', fill: '#FFFFFF'})
            .setOrigin(0.5);

        // Creates Menu
        this.createLinks(this.menu, (menuItem) => this.createEvents(menuItem));
    }
}

export default MenuScene;