export default class AudioManager {
    constructor(scene) {
        this.scene = scene

        // Background Audio
        this.backgroundAudio = null
        this.backgroundAudioPlaying = false

        // News Audio
        this.newsAudio = null
        this.newsAudioPlaying = false
    }

    loadAudio() {
        //Load Background Music
        this.scene.load.audio('backgroundMusic', 'src/assets/sounds/music/background_audio.wav')
        this.scene.load.audio('newsAudio', 'src/assets/sounds/music/news_audio.wav')
        
        //Load Zombie Audio
        this.scene.load.audio('walkerZombie', 'src/assets/sounds/effects/zombies/walker_zombie.wav')
        this.scene.load.audio('tankZombie', 'src/assets/sounds/effects/zombies/tank_zombie.wav')
        this.scene.load.audio('runnerZombie', 'src/assets/sounds/effects/zombies/runner_zombie.wav')
        this.scene.load.audio('zombieHit', 'src/assets/sounds/effects/zombies/zombie_hit.wav')
        
        //Load Tower Audio
        this.scene.load.audio('sniperShoot', 'src/assets/sounds/effects/towers/sniper_tower.wav')
        this.scene.load.audio('missileShoot', 'src/assets/sounds/effects/towers/rocket_tower.mp3')
        this.scene.load.audio('flameShoot', 'src/assets/sounds/effects/towers/flame_tower.wav')
    }
    
    playBackgroundAudio(){
        if (!this.backgroundAudioPlaying){
            this.backgroundAudio = this.scene.sound.add('backgroundMusic', {loop:true})
            this.backgroundAudio.play()
            this.backgroundAudioPlaying = true
        }
    }

    stopBackgroundAudio(){
        if (this.backgroundAudioPlaying) {
            this.backgroundAudio.stop()
            this.backgroundAudioPlaying = false
        }
    }

    playNewsAudio(){
        if (!this.newsAudioPlaying) {
            this.newsAudio = this.scene.sound.add('newsAudio', {loop:true})
            this.newsAudio.play()
            this.newsAudioPlaying = true
        }
    }

    stopNewsAudio(){
        if(this.newsAudioPlaying){
            this.newsAudio.stop()
            this.newsAudioPlaying = false
        }
    }

    // Zombies
    playZombieAudio(zombieType){
        if (zombieType == 'walker'){
            this.playWalkerZombieAudio()
        }
        else if (zombieType == 'tank'){
            this.playTankZombieAudio()
        }
        else if (zombieType == 'runner'){
            this.playRunnerZombieAudio()
        }
    }

    playWalkerZombieAudio(){
        this.scene.sound.play('walkerZombie')
    }

    playTankZombieAudio(){
        this.scene.sound.play('tankZombie')
    }

    playRunnerZombieAudio(){
        this.scene.sound.play('runnerZombie')
    }

    playZombieHitAudio(){
        this.scene.sound.play('zombieHit')
    }

    // Towers
    playTowerShootAudio(towerType){
        if (towerType == 'sniper'){
            this.playSniperShootAudio()
        }
        else if (towerType == 'missile'){
            this.playMissileShootAudio()
        }
        else if (towerType == 'flame'){
            this.playFlameShootAudio()
        }
    }

    playSniperShootAudio(){
        console.log("play sniper audio")
        this.scene.sound.play('sniperShoot')
    }

    playMissileShootAudio(){
        console.log("play missile audio")
        this.scene.sound.play('missileShoot')
    }

    playFlameShootAudio(){
        console.log("play flame audio")
        this.scene.sound.play('flameShoot')
    }
}