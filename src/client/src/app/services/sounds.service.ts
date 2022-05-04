import { Injectable } from "@angular/core";

@Injectable()
export class SoundsService {
    constructor() {
        this.hitAudio.volume = this.soundVolume;
        this.drawAudio.volume = this.soundVolume;
    }

    playing = false;
    musicAudio = new Audio();
    hitAudio = new Audio();
    drawAudio = new Audio();
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
    }

    stopFightMusic() {
        this.musicAudio.pause()
    }

    playHitSound() {
        this.hitAudio.src = this.hitSounds[Math.floor(Math.random() * this.hitSounds.length)];
        this.hitAudio.play()
        console.log(this.hitAudio.volume)
    }

    playDrawSound() {
        this.drawAudio.src = '../../assets/sounds/game/draw/draw1.wav'
        this.drawAudio.play()
    }

    resetHitSoundVolume() {
        this.hitAudio.volume = 0.1;
    }

    playHoverSound() {
        let hoverAudio = new Audio('../../assets/sounds/navigation/move-cursor.wav');
        hoverAudio.volume = this.soundVolume;
        hoverAudio.play()
    }

    playSelectSound() {
        let selectAudio = new Audio('../../assets/sounds/navigation/select.wav')
        selectAudio.volume = this.soundVolume;
        selectAudio.play()
    }

    volumeUp() {
        this.musicAudio.volume += 0.1;
        this.hitAudio.volume += 0.1;
        this.drawAudio.volume += 0.1;
    }

    volumeDown() {
        this.musicAudio.volume -= 0.1;
        this.hitAudio.volume -= 0.1;
        this.drawAudio.volume -= 0.1;
    }

    volumeMute() {
        if (this.isMuted) {
            this.musicAudio.muted = false;
            this.hitAudio.muted = false;
            this.drawAudio.muted = false;
            this.isMuted = false;
        } else {
            this.musicAudio.muted = true;
            this.hitAudio.muted = true
            this.drawAudio.muted = true;
            this.isMuted = true;
        }
    }

    resetVolumeMute() {
        this.musicAudio.muted = false;
        this.hitAudio.muted = false;
        this.drawAudio.muted = false;
        this.isMuted = false;
    }
}