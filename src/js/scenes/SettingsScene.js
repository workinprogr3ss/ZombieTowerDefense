import BaseScene from './BaseScene.js';

class SettingsScene extends BaseScene {

    constructor() {
        super('SettingsScene');
        this.menu = [
            {scene: 'MenuScene', text: 'Back'}
        ];
    }

    create() {
        this.add.text(400, 300, 'Settings Scene', {fontSize: '36px', fill: '#FFFFFF'})
            .setOrigin(0.5);
        // Creates Menu
        this.createLinks(this.menu, (menuItem) => this.createEvents(menuItem));
    }
}

export default SettingsScene;