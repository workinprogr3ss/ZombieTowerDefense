import BaseScene from './BaseScene.js';

class LoadSaveScene extends BaseScene {

    constructor() {
        super('LoadSaveScene');
        this.menu = [
            {scene: 'MenuScene', text: 'Back'}
        ];
    }

    create() {
        this.add.text(400, 300, 'Load Save Scene', {fontSize: '36px', fill: '#FFFFFF'})
            .setOrigin(0.5);
        // Creates Menu
        this.createLinks(this.menu, (menuItem) => this.createEvents(menuItem));
    }
}

export default LoadSaveScene;