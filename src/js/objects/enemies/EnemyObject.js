import { findPath } from '../../utils/PathfindingUtil.js';

export default class Enemy extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, initalDirection, health, speed) {
        super(scene, x, y, texture);
    
        // Add this sprite to the scene
        scene.add.existing(this);

        // Initalize properties
        this.health = health || 100;
        this.speed = speed || 1;
        this.state = 'normal'; // or 'damaged' or 'dead'

        // Initialize animations
        this.initalizeAnimations(scene, texture);

        // Set the intial direction
        this.setDirection(initalDirection);

        // Enable physics
        scene.physics.world.enable(this);

        // Store positions for pathing
        this.nextX = null;
        this.nextY = null;
        this.path = null;
}

// Method to initialize animations
initalizeAnimations(scene, texture) {
    const directions = ['Right','Left', 'Up', 'Down'];

    directions.forEach((direction) => {
        const key = `${texture}${direction}`;

        if (!scene.anims.exists(key)) {
            scene.anims.create({
                key: key,
                frames: scene.anims.generateFrameNumbers(texture, { start: 0, end: 2 }),
                frameRate: 5,
                repeat: -1
            });
        }
    });
}

// Method to set the direction of the enemy
setDirection(direction) {
    this.anims.play(`${this.texture.key}${direction}`, true);
}

// Method to calculate the path to the target
calculatePath(startX, startY, targetX, targetY) {
    findPath(this.scene.grid.getGrid(), startX, startY, targetX, targetY,  (path, error) => {
        if (error) {
            console.log("Error finding path:", error);
        } else {
            console.log("Path found:", path);
            this.path = path;
            this.followPath();
        }
    });
}

// Method to move the enemy along a path
followPath() {
    if (!this.path || this.path.length === 0) {
        console.log("No path provided for enemy to move.");
        return;
    }
    
    // Shift off the first point, as that's the starting point
    const nextPoint = this.path.shift();

    // Convert tile coordinates to world coordinates
    this.nextX = nextPoint.x * 16;
    this.nextY = nextPoint.y * 16;

    // Move using physics engine
    this.scene.physics.moveTo(this, this.nextX, this.nextY, this.speed);
}

// Method to update the enemy's position
update() {
    //console.log(`Current: (${this.x}, ${this.y}), Target: (${this.nextX}, ${this.nextY})`);
    // Check if the enemy has reached its next target position
    if (Phaser.Math.Distance.Between(this.x, this.y, this.nextX, this.nextY) < 1) {
        this.body.stop();
        this.followPath();
    }
}

updatPath() {
    this.calculatePath(this.targetX, this.targetY);
}

// Method to reduce health
reduceHealth(damage) {
    this.health -= damage;
    if (this.health <= 0) {
        this.destroy();
    }
}

// Add more methods here...

}