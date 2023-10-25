import MenuScene from './js/scenes/MenuScene.js';
import LevelSelectScene from './js/scenes/LevelSelectScene.js';
import LoadSaveScene from './js/scenes/LoadSaveScene.js';
import SettingsScene from './js/scenes/SettingsScene.js';
import EasyLevelScene from './js/scenes/EasyLevelScene.js';
import DemoLevelScene from './js/scenes/DemoScene.js';

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [
        new MenuScene, 
        new LevelSelectScene, 
        new LoadSaveScene,
        new SettingsScene,
        new EasyLevelScene,
        new DemoLevelScene
    ]
};

var game = new Phaser.Game(config);