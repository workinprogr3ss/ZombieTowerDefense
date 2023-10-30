class SaveGameScene extends Phaser.Scene {

    constructor() {
        super('SaveGameScene');
        this.menu = [
            {scene: 'LevelSelectScene', text: 'Back'}
        ];
    }

    create() {
        this.add.text(400, 300, 'Save Game Scene', {fontSize: '36px', fill: '#FFFFFF'})
            .setOrigin(0.5);

        const saveSlot1 = this.add.text(400, 200, 'Save Slot 1', {fontSize: '36px', fill: '#FFFFFF'})
            .setOrigin(0.5)
            .setInteractive();

        saveSlot1.on('pointerdown', () => {
            console.log(this.registry.get('playerData'))
        });
    
        // Creates Menu
        this.createLinks(this.menu, (menuItem) => this.createEvents(menuItem));
    }
}

export default SaveGameScene;