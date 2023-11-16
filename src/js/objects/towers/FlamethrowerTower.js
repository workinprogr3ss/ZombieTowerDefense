import Tower from './TowerObject.js';

export default class FlamethrowerTower extends Tower {
    constructor(scene, x, y) {
        // (scene, x, y, texture, damage, range, speed)
        // speed is the delay between attacks in milliseconds
        super(scene, x, y, 'machine_gun_1', 10, 200, 5000);
    }
}