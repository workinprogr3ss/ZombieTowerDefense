import Enemy from "./EnemyObject.js";

// Export Tank class
export default class TankZombie extends Enemy {
    constructor(scene, x, y, initialDirection) {
        // scene, x, y, texture, initialDirection, health, speed, damage, value
        super(scene, x, y, 'tankZombieRight', initialDirection, 250, 15, 25, 25);
    }

    // Specialized methods

}