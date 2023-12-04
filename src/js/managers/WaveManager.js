// Enemy Objects
import WalkerZombie from "../objects/enemies/WalkerZombie.js";
import RunnerZombie from "../objects/enemies/RunnerZombie.js";
import TankZombie from "../objects/enemies/TankZombie.js";
import SpitterZombie from "../objects/enemies/SpitterZombie.js";

import HealthBar from '../objects/HealthBar.js';


export default class WaveManager {
  constructor(scene, startTileX, startTileY, endTileX, endTileY, level, audioManager) {
    this.level = level;
    this.scene = scene;
    this.currentWave = 0;
    this.nextSpawnTime = 0;
    this.waves = this.initializeWaves(level);
    this.zombies = {
      walker: WalkerZombie,
      runner: RunnerZombie,
      tank: TankZombie,
      spitter: SpitterZombie,
    };

    // Tile Coordinates for pathfinding (in grid)
    this.startTileX = startTileX;
    this.startTileY = startTileY;
    this.endTileX = endTileX;
    this.endTileY = endTileY;

    // World Coorindates for spawning enemies
    this.startX = this.startTileX * 16;
    this.startY = this.startTileY * 16;
    this.endX = this.endTileX * 16;
    this.endY = this.endTileY * 16;

    // Next Wave Button
    this.nextWaveButton = scene.add.image(325, 551, 'nextWaveButton').setInteractive({cursor: 'pointer'}).setOrigin(0);
    this.nextWaveButton.on('pointerdown', () => {
      this.startNextWave();
      this.scene.displayManager.waveTimerManager.resetTimer();
      this.nextWaveButton.setVisible(false);
    });

    this.audioManager = audioManager;
  }

  initializeWaves(level) {
    // Define the waves
    if (level == 1) {
      return [
        {
          // Wave 1
          enemies: [
            "walker", 
          ],
          spawnInterval: 1000, // 1 second
        },
        {
          // Wave 2
          enemies: [
            "walker", 
            "walker", 
            "walker", 
            "walker", 
            "tank"
          ],
          spawnInterval: 1000, // 1 second
        },
        {
          // Wave 3
          enemies: [
            "walker", 
            "walker", 
            "runner", 
            "runner", 
            "tank"
          ],
          spawnInterval: 1000, // 1 second
        },
        {
          // Wave 4
          enemies: [
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
          ],
          spawnInterval: 1000, // 1 second
        },
        {
          // Wave 5
          enemies: [
            "tank", 
            "tank", 
            "tank", 
            "tank", 
            "tank"
          ],
          spawnInterval: 1000, // 1 second
        },
        {
          // Wave 6
          enemies: [
            "walker",
            "walker",
            "walker",
            "walker",
            "walker",
            "walker",
            "walker",
            "walker",
            "walker",
            "walker",
          ],
          spawnInterval: 1000, // 1 second
        },
        {
          // Wave 7
          enemies: [
            "walker",
            "walker",
            "runner",
            "runner",
            "walker",
            "walker",
            "walker",
            "walker",
            "runner",
            "runner",
          ],
          spawnInterval: 1000, // 1 second
        },
        {
          // Wave 8
          enemies: [
            "tank",
            "tank",
            "tank",
            "tank",
            "tank",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
          ],
          spawnInterval: 1000, // 1 second
        },
        {
          // Wave 9
          enemies: [
            "walker",
            "walker",
            "runner",
            "runner",
            "tank",
            "walker",
            "walker",
            "runner",
            "runner",
            "tank",
          ],
          spawnInterval: 1000, // 1 second
        },
        {
          // Wave 10
          enemies: [
            "walker",
            "walker",
            "runner",
            "runner",
            "tank",
            "walker",
            "walker",
            "walker",
            "walker",
            "runner",
            "runner",
            "tank",
            "walker",
            "walker",
          ],
          spawnInterval: 1000, // 1 second
        },
      ];
    }
    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    if (level == 2) {
      return [
        {
          // Wave 1
          // Walkers: 10, $200
          enemies: [
            "walker", 
            "walker", 
            "walker", 
            "walker", 
            "walker", 
            "walker", 
            "walker", 
            "walker",  
            "walker",
            "walker",
          ],
          spawnInterval: 1000, // 1 second
        },
        {
          // Wave 2
          // Walkers: 10, $200
          // Runners: 5,  $50
          enemies: [
            "walker", 
            "walker", 
            "walker", 
            "walker", 
            "walker",
            "runner",  
            "walker",
            "runner",  
            "walker", 
            "walker",
            "runner",  
            "walker",
            "runner",  
            "walker",
            "runner",  
          ],
          spawnInterval: 1000, // 1 second
        },
        {
          // Wave 3
          // Tanks: 5, $250
          // Runners: 10,  $100
          enemies: [
            "tank",
            "tank",
            "tank",
            "tank",
            "tank",
            "runner",  
            "runner",  
            "runner",  
            "runner",  
            "runner",  
            "runner",  
            "runner",  
            "runner",  
            "runner",  
            "runner",  
          ],
          spawnInterval: 2000, // 2 seconds
        },
        {
          // Wave 4
          enemies: [
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
          ],
          spawnInterval: 1000, // 1 second
        },
        {
          // Wave 5
          enemies: [
            "tank", 
            "tank", 
            "tank", 
            "tank", 
            "tank"
          ],
          spawnInterval: 1000, // 1 second
        },
        {
          // Wave 6
          enemies: [
            "walker",
            "walker",
            "walker",
            "walker",
            "walker",
            "walker",
            "walker",
            "walker",
            "walker",
            "walker",
            "walker",
            "walker",
            "walker",
            "walker",
            "walker",
            "walker",
            "walker",
            "walker",
            "walker",
            "walker",
          ],
          spawnInterval: 1000, // 1 second
        },
        {
          // Wave 7
          enemies: [
            "walker",
            "walker",
            "runner",
            "runner",
            "walker",
            "walker",
            "walker",
            "walker",
            "runner",
            "runner",
            "runner",
            "walker",
            "walker",
            "walker",
            "walker",
            "runner",
            "runner",
          ],
          spawnInterval: 1000, // 1 second
        },
        {
          // Wave 8
          enemies: [
            "tank",
            "tank",
            "tank",
            "tank",
            "tank",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "tank",
            "tank",
            "runner",
            "runner",
            "tank",
            "tank",
            "runner",
            "runner"
          ],
          spawnInterval: 1000, // 1 second
        },
        {
          // Wave 9
          enemies: [
            "walker",
            "walker",
            "runner",
            "runner",
            "tank",
            "walker",
            "walker",
            "runner",
            "runner",
            "tank",
            "tank",
            "walker",
            "walker",
            "runner",
            "runner",
            "tank"
          ],
          spawnInterval: 1000, // 1 second
        },
        {
          // Wave 10
          enemies: [
            "walker",
            "walker",
            "runner",
            "runner",
            "tank",
            "walker",
            "walker",
            "tank",
            "walker",
            "walker",
            "runner",
            "runner",
            "tank",
          ],
          spawnInterval: 1000, // 1 second
        },
      ];
    }
    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    if (level == 3) {
      return [
        {
          // Wave 1
          enemies: [
            "walker", 
            "walker", 
            "walker",  
            "runner", 
            "runner", 
          ],
          spawnInterval: 1000, // 1 second
        },
        {
          // Wave 2
          enemies: [
            "walker", 
            "walker", 
            "walker", 
            "walker",
            "walker",
            "walker",
            "runner",
            "runner",
            "tank",
          ],
          spawnInterval: 1000, // 1 second
        },
        {
          // Wave 3
          enemies: [
            "tank",
            "tank",
            "walker", 
            "walker", 
            "runner", 
            "runner", 
            "tank",
            "runner", 
            "runner", 
            "tank",
            "walker", 
            "walker",
            "walker", 
            "walker",
          ],
          spawnInterval: 1000, // 1 second
        },
        {
          // Wave 4
          enemies: [
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
          ],
          spawnInterval: 500, // 1 second
        },
        {
          // Wave 5
          enemies: [
            "tank", 
            "tank",
            "runner",
            "runner",
            "walker", 
            "walker", 
            "walker",
            "tank", 
            "tank",
            "walker", 
            "walker", 
            "walker", 
            "runner",
            "runner",
          ],
          spawnInterval: 1000, // 1 second
        },
        {
          // Wave 6
          enemies: [
            "walker",
            "walker",
            "walker",
            "walker",
            "walker",
            "walker",
            "walker",
            "walker",
            "walker",
            "walker",
            "walker",
            "walker",
            "runner",
            "runner",
          ],
          spawnInterval: 1000, // 1 second
        },
        {
          // Wave 7
          enemies: [
            "tank",
            "tank",
            "tank",
            "tank",
            "tank",
            "walker",
            "walker",
            "runner",
            "runner",
            "walker",
            "walker",
            "walker",
            "walker",
            "runner",
            "runner",
            "walker",
            "walker",
            "runner",
            "runner",
            "walker",
            "walker",
            "walker",
            "walker",
            "runner",
            "runner",
            "walker",
            "tank",
            "tank",
            "tank",
            "tank",
            "tank",
          ],
          spawnInterval: 1000, // 1 second
        },
        {
          // Wave 8
          enemies: [
            "tank",
            "tank",
            "tank",
            "tank",
            "tank",
            "runner",
            "runner",
            "tank",
            "tank",
            "runner",
            "runner",
            "tank",
            "tank",
            "tank",
            "tank",
            "tank",
            "runner",
            "runner",
            "tank",
            "tank",
            "runner",
          ],
          spawnInterval: 1000, // 1 second
        },
        {
          // Wave 9
          enemies: [
            "tank",
            "tank",
            "tank",
            "walker",
            "walker",
            "runner",
            "runner",
            "tank",
            "walker",
            "walker",
            "runner",
            "runner",
            "tank",
            "walker",
            "walker",
            "runner",
            "runner",
            "tank",
            "walker",
            "walker",
            "runner",
            "runner",
            "tank"
          ],
          spawnInterval: 1000, // 1 second
        },
        {
          // Wave 10
          enemies: [
            "walker",
            "walker",
            "runner",
            "runner",
            "tank",
            "walker",
            "walker",
            "runner",
            "runner",
            "tank",
            "walker",
            "walker",
            "runner",
            "runner",
            "tank",
            "walker",
          ],
          spawnInterval: 1000, // 1 second
        },
        {
          // Wave 11
          enemies: [
            "walker",
            "walker",
            "runner",
            "runner",
            "tank",
            "walker",
            "walker",
            "runner",
            "runner",
            "tank",
            "walker",
            "walker",
            "runner",
            "runner",
            "tank",
          ],
          spawnInterval: 750, // 1 second
        },
        {
          // Wave 12
          enemies: [
            "tank",
            "tank",
            "tank",
            "tank",
            "tank",
            "tank",
            "tank",
            "tank",
            "tank",
            "tank",
            "tank",
            "tank",
          ],
          spawnInterval: 1000, // 1 second
        },
        {
          // Wave 13
          enemies: [
            "tank",
            "tank",
            "walker",
            "walker",
            "walker",
            "walker",
            "tank",
            "tank",
            "walker",
            "walker",
            "runner",
            "runner",
            "runner",
            "runner",
            "walker",
            "walker",
            "runner",
            "runner",
          ],
          spawnInterval: 750, // 1 second
        },
        {
          // Wave 14
          enemies: [
            "tank",
            "tank",
            "tank",
            "tank",
            "tank",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "walker",
            "walker",
            "walker",
            "walker",
          ],
          spawnInterval: 750, // 1 second
        },
        {
          // Wave 15
          enemies: [
            "tank",
            "tank",
            "tank",
            "tank",
            "tank",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "walker",
            "walker",
            "walker",
            "walker",
          ],
          spawnInterval: 750, // 1 second
        },
        {
          // Wave 16
          enemies: [
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner"   
          ],
          spawnInterval: 500, // 1 second
        },
        {
          // Wave 17
          enemies: [
            "tank",
            "tank",
            "tank",
            "tank",
            "walker",
            "walker",
            "tank",
            "tank",
            "runner",
            "runner",
            "tank",
            "walker",
            "walker",
            "runner",
            "runner",
            "tank",
            "walker",
            "walker",
            "runner",
            "runner",
          ],
          spawnInterval: 500, // 1 second
        },
        {
          // Wave 18
          enemies: [
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner" 
          ],
          spawnInterval: 500, // 1 second
        },
        {
          // Wave 19
          enemies: [
            "tank",
            "tank",
            "tank",
            "tank",
            "walker",
            "walker",
            "tank",
            "tank",
            "runner",
            "runner",
            "tank",
            "walker",
            "walker",
            "runner",
            "runner",
            "tank",
            "walker",
            "walker",
            "runner",
            "runner",
          ],
          spawnInterval: 500, // 1 second
        },
        {
          // Wave 20
          enemies: [
            "tank",
            "tank",
            "walker",
            "walker",
            "walker",
            "walker",
            "walker",
            "walker",
            "tank",
            "tank",
            "tank",
            "walker",
            "walker",
            "tank",
            "tank",
            "tank",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner",
            "runner"
          ],
          spawnInterval: 500, // 1 second
        },
      ];
    }
  }

  startNextWave() {
    // Increment the wave counter if we're not past the last wave
    if (this.currentWave < this.waves.length - 1) {
      if (this.level > 1) {
        this.addWaveReward();
      }
      this.currentWave++;
      this.nextSpawnTime = this.scene.time.now; // Reset the spawn timer for the new wave
      //this.lastWaveEndTime = this.scene.time.now; // Update the end time of the wave
      this.scene.displayManager.waveTimerManager.resetTimer(); // Reset the wave timer
    } else {
      // All waves are complete, handle game completion
    }
  }

  // Method to add wave reward to player currency
  addWaveReward() {
    this.scene.displayManager.playerCurrencyManager.addCurrency(25);
  }

  spawnEnemy() {
    // Get the next enemy to spawn
    const enemyType = this.waves[this.currentWave].enemies.shift();
    const enemyClass = this.zombies[enemyType];
    let enemy; 

    // Level 2 Alternate Spawning Options
    //if (this.level == 2 && this.currentWave == 4) {
    //  enemy = new enemyClass(this.scene, 480, 560); // uses global coordinates
    //  enemy.calculatePath(
    //    30,
    //    35,
    //    this.endTileX,
    //    this.endTileY
    //  ); // uses tile coordinates
    //} 
//
    //// Default Spawning Option
    //else {
    //  enemy = new enemyClass(this.scene, this.startX, this.startY); // uses global coordinates
    //  enemy.calculatePath(
    //    this.startTileX,
    //    this.startTileY,
    //    this.endTileX,
    //    this.endTileY
    //  ); // uses tile coordinates
    //}
    

    enemy = new enemyClass(this.scene, this.startX, this.startY); // uses global coordinates
    enemy.calculatePath(
        this.startTileX,
        this.startTileY,
        this.endTileX,
        this.endTileY
    );
    
    const enemyInitialHealth = enemy.health;
    let percentageIncrease = .1
    // Make hard level harder
    if (this.level == 3) {
      if (this.currentWave <= 10) {
        percentageIncrease = .2
      } else if (this.currentWave <= 15) {
        percentageIncrease = 1
      } else if (this.currentWave <= 20) {
        percentageIncrease = 2
      }
      enemy.health = enemyInitialHealth + (percentageIncrease * enemyInitialHealth);
      enemy.healthBar.destroy();
      enemy.healthBar = new HealthBar(this.scene, this.x - 10, this.y - 20, enemy.health);
      enemy.healthBar.updateHealth(enemy.health);
    }

    // Add the enemy to the scene
    this.scene.zombies.add(enemy);

    // Play the spawn sound
    this.audioManager.playZombieAudio(enemyType);

    // Set the time for the next spawn
    this.nextSpawnTime = this.scene.time.now + this.waves[this.currentWave].spawnInterval;
  }

  update() {
    // Wave Button
    const waveComplete = this.waves[this.currentWave].enemies.length === 0 && this.scene.zombies.countActive(true) === 0;
    const timeRemaining = this.scene.displayManager.waveTimerManager.waveTimer > 0;

    if (waveComplete && timeRemaining) {
      this.nextWaveButton.setVisible(true);
    } else {
      this.nextWaveButton.setVisible(false);
    }

    // Level Complete Logic
    const isLastWave = this.currentWave === this.waves.length - 1;
    const allEnemiesDead = this.scene.zombies.countActive(true) === 0;
    const lastWaveSpawned = this.waves[this.currentWave].enemies.length === 0;

    if (isLastWave && allEnemiesDead && lastWaveSpawned) {
      this.scene.scene.launch('LevelCompleteScene', {
        level: this.scene.scene.key,
        scene: this.scene,
        audioManager: this.audioManager
      });
      this.scene.scene.bringToTop('LevelCompleteScene')
    }

    // If it's time to spawn the next enemy and there are enemies left in the current wave
    if (
      this.scene.time.now > this.nextSpawnTime &&
      this.waves[this.currentWave].enemies.length > 0
    ) {
      this.spawnEnemy();
    }

    // If there are no more enemies to spawn and no active enemies left, the wave is complete
    //&& this.scene.zombies.countActive(true) === 0 ; for when there are no active enemies left
    if (
      (this.waves[this.currentWave].enemies.length === 0 &&
      0 >= this.scene.displayManager.waveTimerManager.waveTimer)
    ) {
      this.startNextWave();
      this.scene.displayManager.waveTimerManager.resetTimer();
    }
  }
}
