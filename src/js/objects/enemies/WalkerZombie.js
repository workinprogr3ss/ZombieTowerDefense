import Enemy from './EnemyObject.js';

// Export Walker class
export default class WalkerZombie extends Enemy {
    constructor(scene, x, y, initialDirection) {
        super(scene, x, y, 'walkerZombieRight', initialDirection, 100, 20);
    }

    // Specialized methods

}
