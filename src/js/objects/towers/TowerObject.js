export default class Tower extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y);
    
        // Add this sprite to the scene
        scene.add.existing(this);
    } 
}