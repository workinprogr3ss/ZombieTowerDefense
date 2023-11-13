import PlayerHealthManager from "../managers/PlayerHealthManager.js";
import PlayerCurrencyManager from "../managers/PlayerCurrencyManager.js";
import EnemyCountManager from "../managers/EnemyCountManager.js";

export default class DisplayManager {
    constructor (scene) {
        this.scene = scene;
        
        // Player Health Manager
        this.playerHealthManager = new PlayerHealthManager(scene);
        this.playerHealthText = null;
        
        // Player Currency Manager
        this.playerCurrencyManager = new PlayerCurrencyManager(scene);
        this.playerCurrencyText = null;
        
        // Enemy Count Manager
        this.enemyCountManager = new EnemyCountManager(scene);
        this.enemyCountText = null;
    }


    create(sceneName) {

        //Player HUD
        this.scene.add.image(0, 0, 'playerHUD').setOrigin(0);

        // Reset the enemy count when the scene is created
        this.enemyCountManager.currentEnemyCount = 0;

        // Enemy Count Text
        this.enemyCountText = this.scene.add.text(470, 575, `${this.enemyCountManager.currentEnemyCount}`, {
            fill: '#000000',
            fontSize: '22px',
        }).setOrigin(0, 0.5);

        // Event listener for updating the enemy count text
        this.scene.events.on('updateEnemyCountDisplay', (newEnemyCount) => {
            this.enemyCountText.setText(`${newEnemyCount}`);
        });

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

        // Reset the player currency when the scene is created
        this.playerCurrencyManager.currentCurrency = 0;
    
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
            this.scene.scene.launch('PauseScene', {context: this.scene.context, scene: sceneName});
            this.scene.scene.bringToTop('PauseScene')
        });

        //Key Bindings
        //this.input.keyboard.on('keydown_P', () => {
        //    this.scene.scene.launch('PauseScene', {context: this.scene.context, scene: sceneName});
        //    this.scene.scene.bringToTop('PauseScene')
        //});
    }
}