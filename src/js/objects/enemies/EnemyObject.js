export default class Enemy extends Phaser.GameObjects.Sprite {
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
    
    // Shift off the first point, as that's the starting point
    const nextPoint = path.shift();

    // Convert tile coordinates to world coordinates
    const nextX = nextPoint.x * 16;
    const nextY = nextPoint.y * 16;

    // Speed Calculations
    const distance = Phaser.Math.Distance.Between(this.x, this.y, nextX, nextY);
    const duration = (distance / this.speed) * 250; // 1000ms per 1s

    scene.tweens.add({
        targets: this,  // Targeting 'this' GameObject
        x: nextX,
        y: nextY,
        ease: 'Linear',
        duration: duration,
        onComplete: () => {
            // Recursive call to move to the next point
            setTimeout(() => this.moveAlongPath(scene, path), 10);
        }
    });
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