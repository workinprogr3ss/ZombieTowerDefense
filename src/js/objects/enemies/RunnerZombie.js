import Enemy from './EnemyObject.js';

// Export Runner class
export default class RunnerZombie extends Enemy {
    constructor(scene, x, y, initalDirection) {
        super(scene, x, y, 'runnerZombieRight', initalDirection, 50, 50);
    }

    // Specialized methods

}