import { findPath } from '../../utils/PathfindingUtil.js';

export default class Enemy extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, initialDirection, health, speed, damage) {
        super(scene, x, y, texture);
    
        // Add this sprite to the scene
        scene.add.existing(this);

        // Initalize properties
        this.health = health || 100;
        this.speed = speed || 1;
        this.damage = damage || 10;
        this.state = 'normal'; // or 'damaged' or 'dead'

        // Initialize animations
        this.initializeAnimations(scene, texture);

        // Play animation
        this.anims.play(`${texture}`, true);

        // Used to store current direction
        this.currentDirection = initialDirection;

        // Set the intial direction
        this.setDirection(initialDirection);

        // Enable physics
        scene.physics.world.enable(this);

        // Store positions for pathing
        this.nextX = null;
        this.nextY = null;
        this.targetTileX = null;
        this.targetTileY = null;
        this.path = null;
}

// Method to initialize animations
initializeAnimations(scene, texture) {
    const directions = ['Right','Left', 'Up', 'Down'];
    const zombieType = this.checkZombieType();

    directions.forEach((direction) => {
        const key = `${zombieType}${direction}`;
        //console.log(`Initializing animation: ${key}`)

        if (!scene.anims.exists(key)) {
            scene.anims.create({
                key: key,
                frames: scene.anims.generateFrameNumbers(key, { start: 0, end: 2 }),
                frameRate: 5,
                repeat: -1
            });
        }
    });
}

// Method to check the type of zombie
checkZombieType() {
    if (this.texture.key[0] == 'w') {
        return 'walkerZombie';
    } else if (this.texture.key[0] == 'r') {
        return 'runnerZombie';
    } else if (this.texture.key[0] == 't') {
        return 'tankZombie';
    } else if (this.texture.key[0] == 's') {
        return 'spitterZombie';
    }
}

// Method to set the direction of the enemy
setDirection(direction) {
    const zombieType = this.checkZombieType();
    const newAnimKey = `${zombieType}${direction}`;
    
    // Debugging
    // console.log(`Setting direction to ${direction}`);
    // console.log("New animation key:", newAnimKey)

    // Only change the animation if the direction has actually changed
    if (this.currentDirection !== direction) {
        // Only play the animation if it's not already playing
        if (this.anims.currentAnim.key !== newAnimKey){
            this.anims.play(newAnimKey, true);
        }
        // Update the current direction
        this.currentDirection = direction;
    }
}

// Method to calculate the path to the target (A* pathfinding)
// Uses tile coordinates
calculatePath(startX, startY, targetX, targetY) {
    // Store the target coordinates
    this.targetTileX = targetX;
    this.targetTileY = targetY;

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
    // Check if the enemy has reached the end of the path
    if (this.reachedEnd()) {
        return;
    }
    // Check if the enemy has reached its next target position
    if (Phaser.Math.Distance.Between(this.x, this.y, this.nextX, this.nextY) < 1) {
        this.body.stop();
        this.followPath();
    } else {
        // Determine the direction based on the current velocity or the difference between the current and next positions
        const deltaX = this.nextX - this.x;
        const deltaY = this.nextY - this.y;

        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            // Moving more horizontally
            this.setDirection(deltaX > 0 ? 'Right' : 'Left');
        } else {
            // Moving more vertically
            this.setDirection(deltaY > 0 ? 'Down' : 'Up');
        }
    }
}

// Method to update the path
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


// Method to check if the enemy has reached the end of the path
// If so destroy the enemy and return true
reachedEnd() {
    // Convert saved tile coordinates to world coordinates
    const targetX = this.targetTileX * 16;
    const targetY = this.targetTileY * 16;

    // Check if the enemy has reached the end of the path
    if (Phaser.Math.Distance.Between(this.x, this.y, targetX, targetY) < 1) {
        this.scene.playerHealthManager.reducePlayerHealth(this.damage);
        this.destroy();
        return true;
    }
    return false;
}

// Add more methods here...

}