import MenuScene from './js/scenes/MenuScene.js';
import LevelSelectScene from './js/scenes/LevelSelectScene.js';

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [new MenuScene, new LevelSelectScene]
};

var game = new Phaser.Game(config);