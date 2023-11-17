import Tower from './TowerObject.js';

export default class MissileTower extends Tower {
    constructor(scene, x, y) {
        //(scene, x, y, texture, damage, range, speed)
        // speed is the delay between attacks in milliseconds
        super(scene, x, y, 'missile_1', 'missile_projectile', 10, 200, 5000);
    }
}