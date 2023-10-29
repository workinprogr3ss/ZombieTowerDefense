export default class Enemy extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, health, speed) {
        super(scene, x, y, texture);
    
        // Add this sprite to the scene
        scene.add.existing(this);

        // Initalize properties
        this.health = health || 100;
        this.speed = speed || 1;
        this.state = 'normal'; // or 'damaged' or 'dead'

        // Enable physics
        scene.physics.world.enable(this);

        // Intialize physics properties
        this.body.velocity.x = 0;
        this.body.velocity.y = 0;
        this.body.drag.set(0.99);

        // Set the enemy to be interactive
        this.setInteractive();
}

// Update the enemy's position
moveAlongPath(path) {
    this.follower = { t: 0, vec: new Phaser.Math.Vector2() };

    // Set up a tween to move the follower along the path
    this.scene.tweens.add({
        targets: this.follower,
        t: 1,
        ease: 'Linear',
        duration: this.speed,
        repeat: -1,
        yoyo: false,
        repeat: 0,
        onUpdate: () => {
            // Get the new coordinates
            path.getPoint(this.follower.t, this.follower.vec);

            // Update the position of the enemy sprite
            this.setPosition(this.follower.vec.x, this.follower.vec.y);
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