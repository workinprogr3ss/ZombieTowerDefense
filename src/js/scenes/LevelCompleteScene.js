class LevelCompleteScene extends Phaser.Scene {
  constructor() {
    super({ key: "LevelCompleteScene" });
  }

  init(data) {
    this.level = data.level;
    this.levelContext = data.scene;
  }

  create() {
    // Debugging
    console.log(this.levelContext)
    console.log(this.level)

    // Add level complete text
    this.add
      .text(this.scale.width / 2, this.scale.height / 2, "CONGRATULATIONS", {
        fontSize: "48px",
        fill: "#fff",
      })
      .setOrigin(0.5);
    this.add
      .text(this.scale.width / 2, this.scale.height / 2, "LEVEL COMPLETED", {
        fontSize: "48px",
        fill: "#fff",
      })
      .setOrigin(0.5);

    // Add a button to restart the game
    let restartButton = this.add
      .text(this.scale.width / 2, this.scale.height / 2 + 120, "Play Again", {
        fontSize: "32px",
        fill: "#0f0",
      })
      .setOrigin(0.5);
    restartButton.setInteractive();

    restartButton.on("pointerup", () => {
      // Restart the level here
      this.levelContext.towerMenuGroup = [];
      this.levelContext.upgradeMenuGroup = [];
      this.scene.start(this.level);
    });

    // Add a button to progress to the next level
    let nextLevelButton = this.add
      .text(this.scale.width / 2, this.scale.height / 2 + 120, "Next Level", {
        fontSize: "32px",
        fill: "#0f0",
      })
      .setOrigin(0.5);
    nextLevelButton.setInteractive();

    nextLevelButton.on("pointerup", () => {
      // Start next level here
      this.levelContext.towerMenuGroup = [];
      this.levelContext.upgradeMenuGroup = [];
      playNextLevel()
    });

    // Add a button to go back to the main menu
    let mainMenuButton = this.add
      .text(this.scale.width / 2, this.scale.height / 2 + 180, "Main Menu", {
        fontSize: "32px",
        fill: "#0f0",
      })
      .setOrigin(0.5);
    mainMenuButton.setInteractive();

    mainMenuButton.on("pointerup", () => {
      // Go back to the main menu scene
      this.scene.start("MenuScene");
    });
  }

  playNextLevel() {
    // Check current level and play the next level
    if (this.level == "EasyLevelScene") {
      this.scene.start("MediumLevelScene", { audioManager: this.audioManager});
      this.registry.set('playerData', {
        levelOne: true,
        levelTwo: true,
        levelThree: false,
        saveSlot: null,
        completed: 2
      });
    } else if (this.level == "MediumLevelScene") {
      this.scene.start("HardLevelScene", { audioManager: this.audioManager});
      this.registry.set('playerData', {
        levelOne: true,
        levelTwo: true,
        levelThree: true,
        saveSlot: null,
        completed: 3
      });
    }
  }
}

export default LevelCompleteScene;
