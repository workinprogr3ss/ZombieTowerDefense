//Menu Scenes
import MenuScene from './js/scenes/MenuScene.js';
import PreLevelSelectScene from './js/scenes/PreLevelSelectScene.js';
import LevelSelectScene from './js/scenes/LevelSelectScene.js';
import LoadSaveScene from './js/scenes/LoadSaveScene.js';
import SaveGameScene from './js/scenes/SaveGameScene.js';
import OverrideScene from './js/scenes/OverrideScene.js';
import SettingsScene from './js/scenes/SettingsScene.js';
import CreditsScene from './js/scenes/CreditsScene.js';
import PauseScene from './js/scenes/PauseScene.js';
import GameOverScene from './js/scenes/GameOverScene.js';

//Game Scenes
import EasyLevelScene from './js/scenes/levels/EasyLevelScene.js';
import MediumLevelScene from './js/scenes/levels/MediumLevelScene.js';
import HardLevelScene from './js/scenes/levels/HardLevelScene.js';

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
        new OverrideScene,
        new SettingsScene,
        new GameOverScene,
        new CreditsScene,
        new PauseScene,
        new EasyLevelScene,
        new MediumLevelScene,
        new HardLevelScene
    ],
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    }
};

new Phaser.Game(config);