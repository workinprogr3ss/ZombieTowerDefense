import Tower from './TowerObject.js';

export default class FlamethrowerTower extends Tower {
    constructor(scene, x, y) {
        // (scene, x, y, texture, damage, range, speed)
        // speed is the delay between attacks in milliseconds
        super(scene, x, y, 'flame_tower_1', 'flame_projectile', 10, 200, 5000);
    }
}