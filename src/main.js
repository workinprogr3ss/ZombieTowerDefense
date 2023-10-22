import MenuScene from './js/scenes/MenuScene.js'

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [MenuScene]
};

var game = new Phaser.Game(config);