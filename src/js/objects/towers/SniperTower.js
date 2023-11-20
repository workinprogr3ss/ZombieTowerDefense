import Tower from './TowerObject.js';

export default class SniperTower extends Tower {
    constructor(scene, x, y) {
        //(scene, x, y, texture, damage, range, speed)
        // speed is the delay between attacks in milliseconds
        super(scene, x, y, 'sniper_tower', 'sniper_projectile', 20, 200, 1500).setOrigin(0.5, 0.8);
    }
}