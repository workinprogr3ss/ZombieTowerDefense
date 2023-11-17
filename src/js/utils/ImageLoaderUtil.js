export function loadImages(scene) {
    // Load towers
    scene.load.image('hotspot', 'src/assets/images/towers/hotspot.png');
    scene.load.image('sniper_tower', 'src/assets/images/towers/sniper_tower.png');
    scene.load.image('missile_tower', 'src/assets/images/towers/missile_tower.png');
    scene.load.image('flamethrower_tower', 'src/assets/images/towers/flamethrower_tower.png');

    // Load testing tower
    scene.load.image('tower_base', 'src/assets/images/towers/testing/PNG/Tower.png');
    scene.load.image('cannon_1', 'src/assets/images/towers/testing/PNG/Cannon.png');
    scene.load.image('missile_1', 'src/assets/images/towers/testing/PNG/Missile_Launcher.png');
    scene.load.image('machine_gun_1', 'src/assets/images/towers/testing/PNG/MG.png');

    // Load Projectiles
    scene.load.image('cannon_projectile', 'src/assets/images/towers/testing/PNG/Bullet_Cannon.png');
    scene.load.image('missile_projectile', 'src/assets/images/towers/testing/PNG/Missile.png');
    scene.load.image('machine_gun_projectile', 'src/assets/images/towers/testing/PNG/Bullet_MG.png');

    // Load Player HUD
    scene.load.image('playerHUD', 'src/assets/images/icons/playerHUD.png');
}