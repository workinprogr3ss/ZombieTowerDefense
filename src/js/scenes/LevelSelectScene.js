import BaseScene from './BaseScene.js';

class LevelSelectScene extends BaseScene {

    constructor() {
        super('LevelSelectScene');

        this.menu = [
            {scene: 'EasyLevelScene', text: 'The Easy Level'},
            {scene: 'MenuScene', text: 'Back'}
        ];
    }

    create() {
        this.add.text(400, 300, 'Level Selection Scene', {fontSize: '36px', fill: '#FFFFFF'})
            .setOrigin(0.5);
        // Creates Menu
        this.createLinks(this.menu, (menuItem) => this.createEvents(menuItem));
    }
}

export default LevelSelectScene;