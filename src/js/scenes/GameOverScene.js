class GameOverScene extends Phaser.Scene {
    constructor() {
      super({ key: 'GameOverScene' });
    }

    create() {
      // Add game over text
      this.add.text(this.scale.width / 2, this.scale.height / 2, 'GAME OVER', { fontSize: '48px', fill: '#fff' }).setOrigin(0.5);
  
      // Display the score
      this.add.text(this.scale.width / 2, this.scale.height / 2 + 60, `Your Score: ${this.score}`, { fontSize: '32px', fill: '#fff' }).setOrigin(0.5);
  
      // Add a button to restart the game
      let restartButton = this.add.text(this.scale.width / 2, this.scale.height / 2 + 120, 'Restart', { fontSize: '32px', fill: '#0f0' }).setOrigin(0.5);
      restartButton.setInteractive();
  
      restartButton.on('pointerdown', () => {
        // Restart the game here
        this.scene.start('DemoLevelScene');
      });
  
      // Add a button to go back to the main menu
      let mainMenuButton = this.add.text(this.scale.width / 2, this.scale.height / 2 + 180, 'Main Menu', { fontSize: '32px', fill: '#0f0' }).setOrigin(0.5);
      mainMenuButton.setInteractive();
  
      mainMenuButton.on('pointerdown', () => {
        // Go back to the main menu scene
        this.scene.start('MenuScene'); // Replace 'MenuScene' with your actual main menu scene key
      });
    }
  }

  export default GameOverScene;
  