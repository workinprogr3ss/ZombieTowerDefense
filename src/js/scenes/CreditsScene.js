import BaseScene from './BaseScene.js';

class CreditsScene extends BaseScene {

    constructor() {
        super('CreditsScene');
    }

    preload() {
        //Load Background Image
        this.backgroundPreload();
    }

    create() {
        //Create Background Image
        this.backgroundCreate();
    }
}

export default CreditsScene;