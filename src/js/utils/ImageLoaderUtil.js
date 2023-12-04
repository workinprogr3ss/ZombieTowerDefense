export function loadImages(scene) {
    // Load towers
    scene.load.image('hotspot', 'src/assets/images/towers/hotspot.png');

    // Load Towers
    scene.load.image('tower_base', 'src/assets/images/towers/Tower.png');
    scene.load.image('sniper_tower_1', 'src/assets/images/towers/Sniper1.png');
    scene.load.image('missile_tower_1', 'src/assets/images/towers/Missile_Launcher1.png');
    scene.load.image('flame_tower_1', 'src/assets/images/towers/MG1.png');

    // Load Projectiles
    scene.load.spritesheet('sniper_projectile', 'src/assets/images/towers/Sniper_Bullet.png', {frameWidth: 32, frameHeight: 32});
    scene.load.spritesheet('missile_projectile', 'src/assets/images/towers/Missile.png', {frameWidth: 32, frameHeight: 32});
    scene.load.spritesheet('flame_projectile', 'src/assets/images/towers/Bullet_MG.png', {frameWidth: 48, frameHeight: 48});

    //Tower Menu
    scene.load.image('TowerMenu', 'src/assets/images/icons/TowerMenu.png');
    scene.load.image('TowerMenu_Sniper', 'src/assets/images/icons/TowerMenu_Sniper.png');
    scene.load.image('TowerMenu_Missile', 'src/assets/images/icons/TowerMenu_Missile.png');
    scene.load.image('TowerMenu_Flamethrower', 'src/assets/images/icons/TowerMenu_Flamethrower.png');
    scene.load.image('TowerMenu_Cancel', 'src/assets/images/icons/TowerMenu_Cancel.png');

    //Upgrade Menu
    scene.load.image('UpgradeMenu', 'src/assets/images/icons/UpgradeMenu.png');
    scene.load.image('Upgrade_Damage', 'src/assets/images/icons/UpgradeDamage.png');
    scene.load.image('Upgrade_AttackSpeed', 'src/assets/images/icons/UpgradeAttackSpeed.png');
    scene.load.image('Upgrade_Range', 'src/assets/images/icons/UpgradeRange.png');
    scene.load.image('UpgradeMenu_Cancel', 'src/assets/images/icons/TowerMenu_Cancel.png');
    scene.load.image('DamageIcon', 'src/assets/images/icons/damageIcon.png');
    scene.load.image('AttackSpeedIcon', 'src/assets/images/icons/attackSpeedIcon.png');
    scene.load.image('RangeIcon', 'src/assets/images/icons/rangeIcon.png');

    // Load Player HUD
    scene.load.image('playerHUD', 'src/assets/images/icons/playerHUD.png');
    scene.load.spritesheet('pauseButton', 'src/assets/images/icons/pauseButton.png', {frameWidth: 34, frameHeight: 34});
    scene.load.image('nextWaveButton', 'src/assets/images/icons/nextWaveButton.png');

    // Level Complete 
    scene.load.image('levelCompleteBackground', 'src/assets/images/icons/LevelCompleteBackground.png')
    scene.load.spritesheet('restartButton', 'src/assets/images/icons/restartButton.png', {frameWidth: 128, frameHeight: 35});
    scene.load.spritesheet('nextLevelButton', 'src/assets/images/icons/nextLevelButton.png', {frameWidth: 128, frameHeight: 35});
    scene.load.spritesheet('exitButton', 'src/assets/images/icons/exitButton.png', {frameWidth: 64, frameHeight: 36});
}