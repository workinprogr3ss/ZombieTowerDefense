//Utility Functions
import { PreloadGameOverGraphics } from '../utils/PreloadGraphics.js';
import { loadSpritesheets } from '../utils/SpritesheetUtil.js';

class GameOverScene extends Phaser.Scene {
    constructor() {
      super({ key: 'GameOverScene' });

    }

    init(data) {
        this.level = data.level;
        this.levelContext = data.scene
        
        this.zombieGroup = [];
        this.frame = 0;
        this.triggerSpawn;
        this.movement = {
          walker: 'walkerZombieDown',
          walkerAnim: null,
          tank: 'tankZombieDown',
          tankAnim: null,
          runner: 'runnerZombieDown',
          runnerAnim: null
        }
    }

    preload() {

      //Load Game Over Graphics
      PreloadGameOverGraphics(this);

      //Load Spritesheets
      loadSpritesheets(this);
    }

    create() {

      //Create Background Image
      const map = this.make.tilemap({key: 'gameOverBackground'});
      const tileSet = map.addTilesetImage('ZombieApocalypseTilesetReferenceFixed', 'ZombieApocalypseTilesetReferenceFixed');
      map.createLayer('Ground', tileSet);
      map.createLayer('Foliage', tileSet);
      map.createLayer('Props', tileSet);

      //Create Game Title
      this.add.image(400,300, 'gameOver').setOrigin(0.5).setDepth(1);

      //Create Buttons
      const restartButton = this.restartButton = this.add.sprite(400, 350, 'restartButton').setInteractive({cursor: 'pointer'}).setOrigin(0.5).setDepth(1);;
      const exitButton = this.exitButton = this.add.sprite(400, 400, 'exitButton').setInteractive({cursor: 'pointer'}).setOrigin(0.5).setDepth(1);;
      
      //Set Button Interactions
      this.setButtonInteractions(restartButton);
      this.setButtonInteractions(exitButton);

      //Restart Level and Menu Groups
      restartButton.on('pointerup', () => {
        this.levelContext.towerMenuGroup = [];
        this.levelContext.upgradeMenuGroup = [];
        this.scene.start(this.level);
      });  
  
      //Return to Main Menu
      exitButton.on('pointerup', () => {
        this.levelContext.towerMenuGroup = [];
        this.levelContext.upgradeMenuGroup = [];
        this.scene.start('MenuScene');
      });

      this.movement.walkerAnim = this.anims.create({
        key: this.movement.walker,
        frames: this.anims.generateFrameNumbers(this.movement.walker, { start: 0, end: 2 }),
        frameRate: 5,
        repeat: -1
      });

      this.movement.tankAnim = this.anims.create({
        key: this.movement.tank,
        frames: this.anims.generateFrameNumbers(this.movement.tank, { start: 0, end: 2 }),
        frameRate: 5,
        repeat: -1
      });

      this.movement.runnerAnim = this.anims.create({
        key: this.movement.runner,
        frames: this.anims.generateFrameNumbers(this.movement.runner, { start: 0, end: 2 }),
        frameRate: 5,
        repeat: -1
      });

      this.spawnInitialZombies();

      this.triggerSpawn = this.time.addEvent({
        callback: this.spawnZombies,
        callbackScope: this,
        delay: 500,
        loop: true
      });
    }

    update(time, delta) {
      this.zombieGroup.forEach(zombie => {
        if (zombie.y > 604) {
          zombie.destroy();
        }
        zombie.y += 0.25;
      });
    }

    spawnInitialZombies() {
      for (let i = 0; i < 150; i++ ) {

        let row = Phaser.Math.Between(0, 604);
        let column = Phaser.Math.Between(0, 800);
        let zombieType = Phaser.Math.Between(0, 2);

        let walker = this.movement.walkerAnim;
        let tank = this.movement.tankAnim;
        let runner = this.movement.runnerAnim;
        
        if (zombieType == 0) {
          this.zombieGroup.push(this.add.sprite(column, row, 'walkerZombieDown').setOrigin(0.5).play(walker));
        } else if (zombieType == 1) {
          this.zombieGroup.push(this.add.sprite(column, row, 'tankZombieDown').setOrigin(0.5).play(tank));
        } else {
          this.zombieGroup.push(this.add.sprite(column, row, 'runnerZombieDown').setOrigin(0.5).play(runner));
        }
      }
    }

    spawnZombies() {
      let column = Phaser.Math.Between(0, 800)
      let zombieType = Phaser.Math.Between(0, 2);

      let walker = this.movement.walkerAnim;
      let tank = this.movement.tankAnim;
      let runner = this.movement.runnerAnim;
      
      if (zombieType == 0) {
        this.zombieGroup.push(this.add.sprite(column, 0, 'walkerZombieDown').setOrigin(0.5).play(walker));
      } else if (zombieType == 1) {
        this.zombieGroup.push(this.add.sprite(column, 0, 'tankZombieDown').setOrigin(0.5).play(tank));
      } else {
        this.zombieGroup.push(this.add.sprite(column, 0, 'runnerZombieDown').setOrigin(0.5).play(runner));
      }
    }

    setButtonInteractions(button) {
      button.on('pointerover', () => {
        button.setFrame(2);
      });      
      
      button.on('pointerout', () => {
        button.setFrame(0);
      });    

      button.on('pointerdown', () => {
        button.setFrame(1);
      });    
    }
  }

  export default GameOverScene;
  
