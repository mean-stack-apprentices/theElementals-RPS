import { Injectable } from "@angular/core";

@Injectable()
export class SoundsService {
    constructor() {
        this.hitAudio.volume = this.soundVolume;
        this.drawAudio.volume = this.soundVolume;
        this.gameOverAudio.volume = this.soundVolume;
        this.gameEndAudio.volume = this.soundVolume;
        this.moveSelectAudio.volume = this.soundVolume;
        this.musicAudio.volume = this.soundVolume;
    }

    playing = false;
    musicAudio = new Audio();
    hitAudio = new Audio();
    drawAudio = new Audio();
    gameOverAudio = new Audio();
    gameEndAudio = new Audio();
    moveSelectAudio = new Audio();
    musicStatus = 'Play Music';
    isMuted = false;
    soundVolume = 0.1;
    fightMusic = [
        '../../assets/sounds/game/fight1.mp3',
        '../../assets/sounds/game/fight2.mp3',
        '../../assets/sounds/game/fight3.mp3',
        '../../assets/sounds/game/fight4.mp3',
        '../../assets/sounds/game/fight5.mp3',
        '../../assets/sounds/game/fight6.mp3',
        '../../assets/sounds/game/fight7.mp3',
    ]

    hitSounds = [
        '../../assets/sounds/game/hits/hit_punch_l.wav',
        '../../assets/sounds/game/hits/hit_punch_m.wav',
        '../../assets/sounds/game/hits/hit_punch_h.wav'
    ]

    playMenuMusic() {
        if (this.playing === false) {
            this.musicAudio.src = "../../../assets/sounds/menu.mp3";
            this.musicAudio.load();
            this.musicAudio.volume = 0.05;
            this.musicAudio.loop = true;
            this.musicAudio.play()
            this.playing = true;
            this.musicStatus = 'Stop Music'
            console.log('playing')
        } else {
            this.musicAudio.pause()
            this.playing = false;
            this.musicStatus = 'Play Music'
            console.log('paused')
        }
    }

    stopMenuMusic() {
        this.musicAudio.pause();
        this.musicStatus = 'Play Music'
        this.musicAudio.volume = this.soundVolume;
        this.playing = false
    }

    playFightMusic() {
        this.musicAudio.src = this.fightMusic[Math.floor(Math.random() * this.fightMusic.length)];
        this.musicAudio.load();
        this.musicAudio.volume = this.soundVolume;
        this.musicAudio.loop = true;
        this.musicAudio.play()
        console.log(this.musicAudio.volume)
    }

    stopFightMusic() {
        this.musicAudio.pause()
        this.gameEndAudio.pause()
    }

    playGameOverMusic() {
        this.gameOverAudio.src = '../../assets/sounds/game/game-over.mp3'
        this.gameOverAudio.play()
        console.log(this.gameOverAudio.volume)
    }

    resetGameOverMusicVolume() {
        this.gameOverAudio.volume = 0.1;
    }

    playGameEndMusic() {
        this.gameEndAudio.src = '../../assets/sounds/game/game-end.mp3'
        this.gameEndAudio.loop = true;
        this.gameEndAudio.play();
    }

    resetGameEndMusicVolume() {
        this.gameEndAudio.volume = 0.1;
    }

    playHitSound() {
        this.hitAudio.src = this.hitSounds[Math.floor(Math.random() * this.hitSounds.length)];
        this.hitAudio.play()
        console.log(this.hitAudio.volume)
    }

    resetHitSoundVolume() {
        this.hitAudio.volume = 0.1;
    }

    playDrawSound() {
        this.drawAudio.src = '../../assets/sounds/game/draw/draw1.wav'
        this.drawAudio.play()
    }

    resetDrawSoundVolume() {
        this.drawAudio.volume = 0.1;
    }

    playHoverSound() {
        if (this.isMuted) {
        } else {
            let hoverAudio = new Audio('../../assets/sounds/navigation/move-cursor.wav');
            hoverAudio.volume = this.soundVolume;
            hoverAudio.play()
        }
    }

    playSelectSound() {
        if (this.isMuted) {

        } else {
            let selectAudio = new Audio('../../assets/sounds/navigation/select.wav')
            selectAudio.volume = this.soundVolume;
            selectAudio.play()
        }
    }

    playMoveSelectSound() {
        if (this.isMuted) {

        } else {
            let moveSelectAudio = new Audio('../../assets/sounds/game/choose.mp3')
            moveSelectAudio.volume = this.soundVolume;
            moveSelectAudio.play()
        }

    }

    volumeUp() {
        this.musicAudio.volume += 0.1;
        this.hitAudio.volume += 0.1;
        this.drawAudio.volume += 0.1;
        this.gameOverAudio.volume += 0.1;
        this.gameEndAudio.volume += 0.1;
        this.soundVolume += 0.1;
    }

    volumeDown() {
        this.musicAudio.volume -= 0.1;
        this.hitAudio.volume -= 0.1;
        this.drawAudio.volume -= 0.1;
        this.gameOverAudio.volume -= 0.1;
        this.gameEndAudio.volume -= 0.1;
        this.soundVolume -= 0.1;
    }

    volumeMute() {
        if (this.isMuted) {
            this.musicAudio.muted = false;
            this.hitAudio.muted = false;
            this.drawAudio.muted = false;
            this.moveSelectAudio.muted = false;
            this.gameOverAudio.muted = false;
            this.gameEndAudio.muted = false;
            this.isMuted = false;
        } else {
            this.musicAudio.muted = true;
            this.hitAudio.muted = true
            this.drawAudio.muted = true;
            this.musicAudio.muted = true;
            this.gameOverAudio.muted = true;
            this.moveSelectAudio.muted = true;
            this.gameEndAudio.muted = true;
            this.isMuted = true;
        }
    }

    resetVolumeMute() {
        this.musicAudio.muted = false;
        this.hitAudio.muted = false;
        this.drawAudio.muted = false;
        this.isMuted = false;
        this.soundVolume = 0.1;
    }
}