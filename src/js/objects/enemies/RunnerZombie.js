import Enemy from './EnemyObject.js';

// Export Runner class
export default class RunnerZombie extends Enemy {
    constructor(scene, x, y, initalDirection) {
        //scene, x, y, texture, initialDirection, health, speed, damage, value
        super(scene, x, y, 'runnerZombieRight', initalDirection, 50, 50, 5, 25);
    }

    // Specialized methods

}