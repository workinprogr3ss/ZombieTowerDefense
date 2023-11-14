import Tower from './TowerObject.js';

export default class FlamethrowerTower extends Tower {
    constructor(scene, x, y) {
        super(scene, x, y, 'flamethrower_tower', 25, 2, 5);
    }
}