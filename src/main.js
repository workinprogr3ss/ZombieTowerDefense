//Menu Scenes
import MenuScene from './js/scenes/MenuScene.js';
import PreLevelSelectScene from './js/scenes/PreLevelSelectScene.js';
import LevelSelectScene from './js/scenes/LevelSelectScene.js';
import LoadSaveScene from './js/scenes/LoadSaveScene.js';
import SaveGameScene from './js/scenes/SaveGameScene.js';
import SettingsScene from './js/scenes/SettingsScene.js';

//Game Scenes
import DemoLevelScene from './js/scenes/DemoScene.js';

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 608,
    scene: [
        new MenuScene, 
        new PreLevelSelectScene,
        new LevelSelectScene, 
        new LoadSaveScene,
        new SaveGameScene,
        new SettingsScene,
        new DemoLevelScene
    ],
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    }
};

new Phaser.Game(config);