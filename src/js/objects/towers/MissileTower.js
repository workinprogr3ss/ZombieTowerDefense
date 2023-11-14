import Tower from './TowerObject.js';

export default class MissileTower extends Tower {
    constructor(scene, x, y) {
        super(scene, x, y, 'missile_tower', 75, 8, 1);
    }
}