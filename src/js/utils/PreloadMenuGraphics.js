export function PreloadMenuGraphics(scene) {

    //Background
    scene.load.tilemapTiledJSON('menuBackground', 'src/assets/maps/menuBackground.json');
    scene.load.image('ZombieApocalypseTilesetReferenceFixed', 'src/assets/images/tilesets/ZombieApocalypseTilesetReferenceFixed.png');

    //Title
    scene.load.image('title', 'src/assets/images/icons/TitleBackground.png');

    //Global Buttons
    scene.load.spritesheet('backButton', 'src/assets/images/icons/backButton.png', {frameWidth: 96, frameHeight: 36});

    //Main Menu Buttons
    scene.load.spritesheet('newGameButton', 'src/assets/images/icons/newGameButton.png', {frameWidth: 128, frameHeight: 48});
    scene.load.spritesheet('loadGameButton', 'src/assets/images/icons/loadGameButton.png', {frameWidth: 128, frameHeight: 48});
    scene.load.spritesheet('settingsButton', 'src/assets/images/icons/settingsButton.png', {frameWidth: 128, frameHeight: 48});
    scene.load.spritesheet('creditsButton', 'src/assets/images/icons/creditsButton.png', {frameWidth: 128, frameHeight: 36});

    //Load Game Buttons
    scene.load.image('loadSaveMenu', 'src/assets/images/icons/loadSaveMenu.png');
    scene.load.spritesheet('loadSave1', 'src/assets/images/icons/loadSave1.png', {frameWidth: 208, frameHeight: 36});
    scene.load.spritesheet('loadSave2', 'src/assets/images/icons/loadSave2.png', {frameWidth: 208, frameHeight: 36});
    scene.load.spritesheet('loadSave3', 'src/assets/images/icons/loadSave3.png', {frameWidth: 208, frameHeight: 36});

    //Credits Menu Button
    scene.load.image('creditsMenu', 'src/assets/images/icons/creditsMenu.png');

    //Settings Menu Button
    scene.load.image('settingsMenu', 'src/assets/images/icons/settingsMenu.png');
}