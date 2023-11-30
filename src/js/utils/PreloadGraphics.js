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

    //Background
    scene.load.image('devButton', 'src/assets/images/icons/devButton.png');
}

export function PreloadLevelSelectGraphics(scene) {

    //LevelSelect Menu
    scene.load.image('levelSelectMenu', 'src/assets/images/icons/levelSelectMenu.png');

    //Background
    scene.load.tilemapTiledJSON('menuBackground', 'src/assets/maps/menuBackground.json');
    scene.load.image('ZombieApocalypseTilesetReferenceFixed', 'src/assets/images/tilesets/ZombieApocalypseTilesetReferenceFixed.png');

    //Level Buttons
    scene.load.spritesheet('levelOne', 'src/assets/images/icons/levelOne.png', {frameWidth: 57, frameHeight: 55});
    scene.load.spritesheet('levelTwo', 'src/assets/images/icons/levelTwo.png', {frameWidth: 57, frameHeight: 55});
    scene.load.spritesheet('levelThree', 'src/assets/images/icons/levelThree.png', {frameWidth: 57, frameHeight: 55});

    //Save Button
    scene.load.spritesheet('saveButton', 'src/assets/images/icons/saveButton.png', {frameWidth: 96, frameHeight: 36});

    //Back Button
    scene.load.spritesheet('backButton', 'src/assets/images/icons/backButton.png', {frameWidth: 96, frameHeight: 36});
}

export function PreloadSaveGameGraphics(scene) {

    //SaveGame & Override Menus
    scene.load.image('SaveGameMenu', 'src/assets/images/icons/SaveGameMenu.png');
    scene.load.image('overrideMenu', 'src/assets/images/icons/overrideMenu.png');

    //Yes & No Buttons
    scene.load.spritesheet('yes', 'src/assets/images/icons/yes.png', {frameWidth: 80, frameHeight: 36});
    scene.load.spritesheet('no', 'src/assets/images/icons/no.png', {frameWidth: 80, frameHeight: 36});

    //Background
    scene.load.tilemapTiledJSON('menuBackground', 'src/assets/maps/menuBackground.json');
    scene.load.image('ZombieApocalypseTilesetReferenceFixed', 'src/assets/images/tilesets/ZombieApocalypseTilesetReferenceFixed.png');

    //Save Buttons
    scene.load.spritesheet('loadSave1', 'src/assets/images/icons/loadSave1.png', {frameWidth: 208, frameHeight: 36});
    scene.load.spritesheet('loadSave2', 'src/assets/images/icons/loadSave2.png', {frameWidth: 208, frameHeight: 36});
    scene.load.spritesheet('loadSave3', 'src/assets/images/icons/loadSave3.png', {frameWidth: 208, frameHeight: 36});

    //Save Button
    scene.load.spritesheet('saveButton', 'src/assets/images/icons/saveButton.png', {frameWidth: 96, frameHeight: 36});

    //Back Button
    scene.load.spritesheet('backButton', 'src/assets/images/icons/backButton.png', {frameWidth: 96, frameHeight: 36});
}

export function PreloadLoadSaveGraphics(scene) {

    //Settings Menu
    scene.load.image('loadSaveMenu', 'src/assets/images/icons/loadSaveMenu.png');

    //Background
    scene.load.tilemapTiledJSON('menuBackground', 'src/assets/maps/menuBackground.json');
    scene.load.image('ZombieApocalypseTilesetReferenceFixed', 'src/assets/images/tilesets/ZombieApocalypseTilesetReferenceFixed.png');

    //Load Buttons
    scene.load.spritesheet('loadSave1', 'src/assets/images/icons/loadSave1.png', {frameWidth: 208, frameHeight: 36});
    scene.load.spritesheet('loadSave2', 'src/assets/images/icons/loadSave2.png', {frameWidth: 208, frameHeight: 36});
    scene.load.spritesheet('loadSave3', 'src/assets/images/icons/loadSave3.png', {frameWidth: 208, frameHeight: 36});

    //Back Button
    scene.load.spritesheet('backButton', 'src/assets/images/icons/backButton.png', {frameWidth: 96, frameHeight: 36});
}

export function PreloadSettingsGraphics(scene) {

    //Settings Menu
    scene.load.image('settingsMenu', 'src/assets/images/icons/settingsMenu.png');

    //Background
    scene.load.tilemapTiledJSON('menuBackground', 'src/assets/maps/menuBackground.json');
    scene.load.image('ZombieApocalypseTilesetReferenceFixed', 'src/assets/images/tilesets/ZombieApocalypseTilesetReferenceFixed.png');

    //Back Button
    scene.load.spritesheet('backButton', 'src/assets/images/icons/backButton.png', {frameWidth: 96, frameHeight: 36});
}

export function PreloadCreditsGraphics(scene) {

    //Credits Menu
    scene.load.image('creditsMenu', 'src/assets/images/icons/creditsMenu.png');

    //Background
    scene.load.tilemapTiledJSON('menuBackground', 'src/assets/maps/menuBackground.json');
    scene.load.image('ZombieApocalypseTilesetReferenceFixed', 'src/assets/images/tilesets/ZombieApocalypseTilesetReferenceFixed.png');

    //Back Button
    scene.load.spritesheet('backButton', 'src/assets/images/icons/backButton.png', {frameWidth: 96, frameHeight: 36});
}

export function PreloadPauseGameGraphics(scene) {

    //Pause Menu 
    scene.load.image('pauseMenu', 'src/assets/images/icons/pauseMenu.png');

    //Exit, Restart, & Resume Buttons
    scene.load.spritesheet('exitButton', 'src/assets/images/icons/exitButton.png', {frameWidth: 64, frameHeight: 36});
    scene.load.spritesheet('restartButton', 'src/assets/images/icons/restartButton.png', {frameWidth: 128, frameHeight: 35});
    scene.load.spritesheet('resumeButton', 'src/assets/images/icons/resumeButton.png', {frameWidth: 128, frameHeight: 35});
}

export function PreloadOverrideGraphics(scene) {

    //SaveGame Menu
    scene.load.image('SaveGameMenuBG', 'src/assets/images/icons/SaveGameMenu.png');
    scene.load.image('overrideMenu', 'src/assets/images/icons/overrideMenu.png');

    //Background Menu & Buttons
    scene.load.spritesheet('loadSave1BG', 'src/assets/images/icons/loadSave1.png', {frameWidth: 208, frameHeight: 36});
    scene.load.spritesheet('loadSave3BG', 'src/assets/images/icons/loadSave3.png', {frameWidth: 208, frameHeight: 36}) 

    //Background
    scene.load.tilemapTiledJSON('menuBackground', 'src/assets/maps/menuBackground.json');
    scene.load.image('ZombieApocalypseTilesetReferenceFixed', 'src/assets/images/tilesets/ZombieApocalypseTilesetReferenceFixed.png');

    //Yes & No Buttons
    scene.load.spritesheet('yes', 'src/assets/images/icons/yes.png', {frameWidth: 80, frameHeight: 36});
    scene.load.spritesheet('no', 'src/assets/images/icons/no.png', {frameWidth: 80, frameHeight: 36});
}