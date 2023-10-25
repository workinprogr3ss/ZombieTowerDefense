import Enemy from './EnemyObject.js';

// Export Runner class
export default class RunnerZombie extends Enemy {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture, 50, 4);
    }

    // Specialized methods

}