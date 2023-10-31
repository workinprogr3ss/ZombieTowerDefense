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
        this.currentPath = null;
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

setDirection(direction) {
    this.anims.play(`${this.texture.key}${direction}`, true);
}

// Update the enemy's position
moveAlongPath(scene, path) {
    if (!path || path.length === 0) {
        console.log("No path provided for enemy to move.");
        return;
    }

    // Store the path
    this.currentPath = path;
    
    // Shift off the first point, as that's the starting point
    const nextPoint = path.shift();

    // Convert tile coordinates to world coordinates
    this.nextX = nextPoint.x * 16;
    this.nextY = nextPoint.y * 16;

    // Move using physics engine
    this.scene.physics.moveTo(this, this.nextX, this.nextY, this.speed);
}

update() {
    // Check if the enemy has reached its next target position
    if (Phaser.Math.Distance.Between(this.x, this.y, this.nextX, this.nextY) < 1) {
        this.body.stop();
        this.moveAlongPath(this.scene, this.currentPath);
    }
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