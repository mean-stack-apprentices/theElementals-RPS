import { Injectable } from "@angular/core";

@Injectable()
export class SoundsService {
    constructor() { }

    playing = false;
    musicAudio = new Audio();
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
        this.playing = false
    }

    playFightMusic() {
        this.musicAudio.src = this.fightMusic[Math.floor(Math.random() * this.fightMusic.length)];
        this.musicAudio.load();
        this.musicAudio.volume = 0.05;
        this.musicAudio.loop = true;
        this.musicAudio.play()
    }

    stopFightMusic() {
        this.musicAudio.pause()
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
    }

    volumeDown() {
        this.musicAudio.volume -= 0.1;
    }

    volumeMute() {
        if (this.isMuted) {
            this.musicAudio.muted = false;
            this.isMuted = false;
        } else {
            this.musicAudio.muted = true;
            this.isMuted = true;
        }
    }
}