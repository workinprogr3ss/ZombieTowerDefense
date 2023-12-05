class LevelCompleteScene extends Phaser.Scene {
  constructor() {
    super({ key: "LevelCompleteScene" });

    this.levelCompleteMenu = null;
    this.restartButton = null;
    this.nextLevelButton = null;
    this.exitButton = null;
  }

  init(data) {
    this.level = data.level;
    this.levelContext = data.scene;
    this.audioManager = data.audioManager;
  }

  create() {
    this.levelContext.physics.pause();
    this.levelContext.scene.pause();

    this.levelCompleteMenu = this.add.image(400, 300, 'levelCompleteBackground');
    this.restartButton = this.add.sprite(400, 340, 'restartButton');
    this.nextLevelButton = this.add.sprite(400, 380, 'nextLevelButton');
    this.exitButton = this.add.sprite(400, 420, 'exitButton');

    this.buttonInteractions(this.restartButton, 'restartButton');
    this.buttonInteractions(this.nextLevelButton, 'nextLevelButton');
    this.buttonInteractions(this.exitButton, 'exitButton');
  }

  buttonInteractions(button, source) {
    button.setInteractive({cursor: 'pointer'}).setOrigin(0.5);
    button.on('pointerover', () => {
      button.setFrame(2);
    });
    button.on('pointerdown', () => {
        button.setFrame(1);
    });
    button.on('pointerout', () => {
        button.setFrame(0);
    });
    if (source == 'restartButton') {
      button.on('pointerup', () => {
        this.destroyButtons();
        this.levelContext.towerMenuGroup = [];
        this.levelContext.upgradeMenuGroup = [];
        if (this.level == "EasyLevelScene") {
          this.unlockMediumLevel();
        } else if (this.level == "MediumLevelScene") {
          this.unlockHardLevel();
        } else if (this.level == "HardLevelScene") {
          this.completeHardLevel();
        }
        this.scene.start(this.level);
      }); 
    } else if (source == 'nextLevelButton') {
      if (this.level != "HardLevelScene") {
        button.on('pointerup', () => {
          this.destroyButtons();
          this.levelContext.towerMenuGroup = [];
          this.levelContext.upgradeMenuGroup = [];
          this.playNextLevel()
        }); 
      } 
    } else {
      button.on('pointerup', () => {
          this.destroyButtons();
          if (this.level == "EasyLevelScene") {
            this.unlockMediumLevel();
          } else if (this.level == "MediumLevelScene") {
            this.unlockHardLevel();
          } else if (this.level == "HardLevelScene") {
            this.completeHardLevel();
          }
          this.levelContext.towerMenuGroup = [];
          this.levelContext.upgradeMenuGroup = [];
          this.levelContext.scene.start('PreLevelSelectScene');
      }); 
    }
  };

  unlockMediumLevel() {
    this.registry.set('playerData', {
      levelOne: true,
      levelOneCompleted: true,
      levelTwo: true,
      levelTwoCompleted: false,
      levelThree: false,
      levelThreeCompleted: false,
      saveSlot: null,
    });
  }

  unlockHardLevel() {
    this.registry.set('playerData', {
      levelOne: true,
      levelOneCompleted: true,
      levelTwo: true,
      levelTwoCompleted: true,
      levelThree: true,
      levelThreeCompleted: false,
      saveSlot: null,
    });
  }

  completeHardLevel() {
    this.registry.set('playerData', {
      levelOne: true,
      levelOneCompleted: true,
      levelTwo: true,
      levelTwoCompleted: true,
      levelThree: true,
      levelThreeCompleted: true,
      saveSlot: null,
    });
  }

  playNextLevel() {
    // Check current level and play the next level
    if (this.level == "EasyLevelScene") {
      this.unlockMediumLevel();
      this.levelContext.scene.start("MediumLevelScene", this.audioManager);
    } else if (this.level == "MediumLevelScene") {
      this.unlockHardLevel();
      this.levelContext.scene.start("HardLevelScene", this.audioManager);
    }
  }

  destroyButtons() {
    this.levelCompleteMenu.destroy();
    this.restartButton.destroy();
    this.nextLevelButton.destroy();
    this.exitButton.destroy();
  }
}

export default LevelCompleteScene;
