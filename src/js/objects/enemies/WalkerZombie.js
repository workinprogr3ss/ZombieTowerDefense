import Enemy from './EnemyObject.js';

// Export Walker class
export default class WalkerZombie extends Enemy {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture, 100, 2);
    }

    // Specialized methods

}
