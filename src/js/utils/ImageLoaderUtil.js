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
    scene.load.image('flame_projectile', 'src/assets/images/towers/Bullet_MG.png');

    // Load Player HUD
    scene.load.image('playerHUD', 'src/assets/images/icons/playerHUD.png');
}