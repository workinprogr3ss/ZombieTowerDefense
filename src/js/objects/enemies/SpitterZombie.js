import Enemy from './EnemyObject.js';

// Export Spitter class
export default class SpitterZombie extends Enemy {
    constructor(scene, x, y, initalDirection) {
        super(scene, x, y, 'spitterZombieRight', initalDirection, 100, 25);
    }

    // Specialized methods

}