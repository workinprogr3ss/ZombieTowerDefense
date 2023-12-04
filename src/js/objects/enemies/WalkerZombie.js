import Enemy from './EnemyObject.js';

// Export Walker class
export default class WalkerZombie extends Enemy {
    constructor(scene, x, y, initialDirection) {
        // scene, x, y, texture, initialDirection, health, speed, damage, value
        super(scene, x, y, 'walkerZombieRight', initialDirection, 100, 30, 10, 20);
    }
}
