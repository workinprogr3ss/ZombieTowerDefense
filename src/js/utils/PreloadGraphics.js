export function PreloadMenuGraphics(scene) {

    //Title
    scene.load.image('title', 'src/assets/images/icons/TitleBackground.png');

    //Main Menu Buttons
    scene.load.spritesheet('newGameButton', 'src/assets/images/icons/newGameButton.png', {frameWidth: 128, frameHeight: 48});
    scene.load.spritesheet('loadGameButton', 'src/assets/images/icons/loadGameButton.png', {frameWidth: 128, frameHeight: 48});
    scene.load.spritesheet('settingsButton', 'src/assets/images/icons/settingsButton.png', {frameWidth: 128, frameHeight: 48});
    scene.load.spritesheet('creditsButton', 'src/assets/images/icons/creditsButton.png', {frameWidth: 128, frameHeight: 36});

    //Background
    scene.load.tilemapTiledJSON('menuBackground', 'src/assets/maps/menuBackground.json');
    scene.load.image('ZombieApocalypseTilesetReferenceFixed', 'src/assets/images/tilesets/ZombieApocalypseTilesetReferenceFixed.png');
//
    ////Level Select Menu Buttons
    //scene.load.image('levelSelectMenu', 'src/assets/images/icons/levelSelectMenu.png');
    //scene.load.spritesheet('levelOne', 'src/assets/images/icons/levelOne.png', {frameWidth: 57, frameHeight: 55});
    //scene.load.spritesheet('levelTwo', 'src/assets/images/icons/levelTwo.png', {frameWidth: 57, frameHeight: 55});
    //scene.load.spritesheet('levelThree', 'src/assets/images/icons/levelThree.png', {frameWidth: 57, frameHeight: 55});
    //scene.load.spritesheet('saveButton', 'src/assets/images/icons/saveButton.png', {frameWidth: 96, frameHeight: 36});
    //scene.load.image('lock', 'src/assets/images/icons/lock.png');
//
    ////Load Game Buttons
    //scene.load.image('loadSaveMenu', 'src/assets/images/icons/loadSaveMenu.png');
    //scene.load.spritesheet('loadSave1', 'src/assets/images/icons/loadSave1.png', {frameWidth: 208, frameHeight: 36});
    //scene.load.spritesheet('loadSave2', 'src/assets/images/icons/loadSave2.png', {frameWidth: 208, frameHeight: 36});
    //scene.load.spritesheet('loadSave3', 'src/assets/images/icons/loadSave3.png', {frameWidth: 208, frameHeight: 36});
//
    ////Save Game Buttons
    //scene.load.image('saveGameMenu', 'src/assets/images/icons/SaveGameMenu.png');
    //scene.load.image('overrideMenu', 'src/assets/images/icons/overrideMenu.png');
    //scene.load.spritesheet('yes', 'src/assets/images/icons/yes.png', {frameWidth: 80, frameHeight: 36});
    //scene.load.spritesheet('no', 'src/assets/images/icons/no.png', {frameWidth: 80, frameHeight: 36});
//
    ////Credits Menu Button
    //scene.load.image('creditsMenu', 'src/assets/images/icons/creditsMenu.png');
//
    ////Settings Menu Button
    //scene.load.image('settingsMenu', 'src/assets/images/icons/settingsMenu.png');
}