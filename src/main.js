//Menu Scenes
import MenuScene from './js/scenes/MenuScene.js';
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
        new LevelSelectScene, 
        new LoadSaveScene,
        new SaveGameScene,
        new SettingsScene,
        new DemoLevelScene
    ]
};

new Phaser.Game(config);