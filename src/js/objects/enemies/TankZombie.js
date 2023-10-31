import Enemy from "./EnemyObject.js";

// Export Tank class
export default class TankZombie extends Enemy {
    constructor(scene, x, y, initialDirection) {
        super(scene, x, y, 'tankZombieRight', initialDirection, 200, 10);
    }

    // Specialized methods

}