// Enemy Objects
import WalkerZombie from "../objects/enemies/WalkerZombie.js";
import RunnerZombie from "../objects/enemies/RunnerZombie.js";
import TankZombie from "../objects/enemies/TankZombie.js";
import SpitterZombie from "../objects/enemies/SpitterZombie.js";

export default class WaveManager {
    constructor(scene) {
        this.scene = scene;
        this.currentWave = 0;
        this.waves = this.initializeWaves();
        this.isWaveActive = false;
        this.nextSpawnTime = 0;
        this.zombies = {
            walker: WalkerZombie,
            runner: RunnerZombie,
            tank: TankZombie,
            spitter: SpitterZombie,
        };
        // Tile Coordinates for pathfinding (in grid)
        this.startTileX = 1;
        this.startTileY = 5;
        this.endTileX = 47;
        this.endTileY = 32;
        
        // World Coorindates for spawning enemies
        this.startX = this.startTileX * 16; 
        this.startY = this.startTileY * 16;
        this.endX = this.endTileX * 16;
        this.endY = this.endTileY * 16;
    }

    initializeWaves() {
        // Define the waves
        return [
            { // Wave 1
                enemies: ['walker', 'walker', 'walker'],
                spawnInterval: 1000, // 1 second
            },
            { // Wave 2
                enemies: ['walker', 'walker', 'tank'],
                spawnInterval: 1000, // 1 second
            },
            { // Wave 3
                enemies: ['walker', 'runner', 'tank'],
                spawnInterval: 1000, // 1 second
            },
            { // Wave 4
                enemies: ['runner', 'runner', 'runner'],
                spawnInterval: 1000, // 1 second
            },
            { // Wave 5
                enemies: ['tank', 'tank', 'tank'],
                spawnInterval: 1000, // 1 second
            },
            { // Wave 6
                enemies: ['walker', 'walker', 'walker'],
                spawnInterval: 1000, // 1 second
            },
            { // Wave 7
                enemies: ['walker', 'walker', 'walker'],
                spawnInterval: 1000, // 1 second
            },
            { // Wave 8
                enemies: ['walker', 'walker', 'walker'],
                spawnInterval: 1000, // 1 second
            },
            { // Wave 9
                enemies: ['walker', 'walker', 'walker'],
                spawnInterval: 1000, // 1 second
            },
            { // Wave 10
                enemies: ['walker', 'walker', 'walker'],
                spawnInterval: 1000, // 1 second
            },
        ];
    }

    startNextWave() {
        // Start the next wave
        console.log("Starting next wave");
        this.currentWave++;
        this.isWaveActive = true;
        this.nextSpawnTime = this.scene.time.now + this.waves[this.currentWave].spawnInterval;
    }

    update() {
        // Check if the wave is active
        if (!this.isWaveActive) {
            return;
        }

        // Check if it's time to spawn the next enemy
        if (this.scene.time.now > this.nextSpawnTime) {
            this.spawnEnemy();
            this.nextSpawnTime = this.scene.time.now + this.waves[this.currentWave].spawnInterval;
        }
    }

    spawnEnemy() {
        // Check if there are any enemies left to spawn
        if (this.waves[this.currentWave].enemies.length === 0) {
            this.isWaveActive = false;
            return;
        }

        console.log("Spawning enemy");
        // Get the next enemy to spawn
        const enemyType = this.waves[this.currentWave].enemies.shift();
        const enemyClass = this.zombies[enemyType];
        const enemy = new enemyClass(this.scene, this.startX, this.startY, 'Right');
        enemy.calculatePath(this.startTileX, this.startTileY, this.endTileX, this.endTileY)
        
        // Add the enemy to the scene
        this.scene.zombies.add(enemy);
    }
} 
