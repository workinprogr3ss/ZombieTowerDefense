import Tower from './TowerObject.js';

export default class SniperTower extends Tower {
    constructor(scene, x, y) {
        //(scene, x, y, texture, damage, range, speed)
        // speed is the delay between attacks in milliseconds
        super(scene, x, y, 'cannon_1', 20, 200, 3000);
    }
}