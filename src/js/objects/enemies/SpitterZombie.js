import Enemy from './EnemyObject.js';

// Export Spitter class
export default class SpitterZombie extends Enemy {
    constructor(scene, x, y, initalDirection) {
        // scene, x, y, texture, initialDirection, health, speed, damage, value
        super(scene, x, y, 'spitterZombieRight', initalDirection, 100, 40, 15, 150);
    }

    // Specialized methods

}