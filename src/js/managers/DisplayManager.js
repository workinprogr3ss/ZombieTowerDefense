import PlayerHealthManager from "../managers/PlayerHealthManager.js";
import PlayerCurrencyManager from "../managers/PlayerCurrencyManager.js";
//import EnemyCountManager from "../managers/EnemyCountManager.js";
import WaveTimerManager from "../managers/WaveTimerManager.js";
import ScoreManager from "../managers/ScoreManager.js";

export default class DisplayManager {
    constructor (scene) {
        this.scene = scene;

        // Wave Timer Text
        this.waveTimerManager = new WaveTimerManager(scene);
        this.waveTimerText = null;
        
        // Player Health Manager
        this.playerHealthManager = new PlayerHealthManager(scene);
        this.playerHealthText = null;
        
        // Player Currency Manager
        this.playerCurrencyManager = new PlayerCurrencyManager(scene);
        this.playerCurrencyText = null;

        // Score Manager
        this.scoreManager = new ScoreManager(scene);
        this.scoreText = null;
    }


    create(sceneName) {

        //Player HUD
        this.scene.add.image(0, 0, 'playerHUD').setOrigin(0);

        // Wave Timer Manager
        // Reset the wave timer when the scene is created
        this.scene.waveManager.waveTimer = 30;

        // Wave Timer Text
        this.waveTimerText = this.scene.add.text(470, 575, `${this.waveTimerManager.waveTimer}`, {
            fill: '#000000',
            fontSize: '22px',
        }).setOrigin(0, 0.5);

        // Update the wave timer text every second
        this.scene.events.on('updateWaveTimerDisplay', (newWaveTimer) => {
            this.waveTimerText.setText(`${newWaveTimer}`);
        });

        // Player Health Manager
        // Reset the player health when the scene is created
        this.playerHealthManager.currentHealth = this.playerHealthManager.maxHealth;

        // Player Health Text
        this.playerHealthText = this.scene.add.text(566, 575, `${this.playerHealthManager.currentHealth}`, {
            fill: '#000000',
            fontSize: '22px',
        }).setOrigin(0, 0.5);
    
        // Event listener for updating the player health text
        this.scene.events.on('updateHealthBar', (newHealth) => {
            this.playerHealthText.setText(`${newHealth}`);
        });

        // Player Currency Manager
        // Reset the player currency when the scene is created
        this.playerCurrencyManager.currentCurrency = 350;
    
        // Player Currency Text
        this.playerCurrencyText = this.scene.add.text(662, 575, `${this.playerCurrencyManager.currentCurrency}`, {
            fill: '#000000',
            fontSize: '22px',
        }).setOrigin(0, 0.5);
    
        // Event listener for updating the player currency text
        this.scene.events.on('updateCurrencyDisplay', (newCurrency) => {
            this.playerCurrencyText.setText(`${newCurrency}`);
        });

        //Pause Button
        const pauseButton = this.scene.add.image(771, 575, 'pauseButton').setInteractive({cursor: 'pointer'}).setOrigin(0.5);
        pauseButton.on('pointerdown', () => {pauseButton.setFrame(1)});
        pauseButton.on('pointerout', () => {pauseButton.setFrame(0)});
        pauseButton.on('pointerup', () => {
            this.scene.scene.launch('PauseScene', {context: this.scene, scene: sceneName});
            this.scene.scene.bringToTop('PauseScene')
        });

        //Key Bindings
        //this.input.keyboard.on('keydown_P', () => {
        //    this.scene.scene.launch('PauseScene', {context: this.scene.context, scene: sceneName});
        //    this.scene.scene.bringToTop('PauseScene')
        //});
    }
}