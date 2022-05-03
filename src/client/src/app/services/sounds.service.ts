import { Injectable } from "@angular/core";

@Injectable()
export class SoundsService {
    constructor() { }

    playing = false;
    isMuted = false;
    audio = new Audio();
    musicStatus = 'Play Music';
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
            this.audio.src = "../../../assets/sounds/menu.mp3";
            this.audio.load();
            this.audio.volume = 0.05;
            this.audio.loop = true;
            this.audio.play()
            this.playing = true;
            this.musicStatus = 'Stop Music'
            console.log('playing')
        } else {
            this.audio.pause()
            this.playing = false;
            this.musicStatus = 'Play Music'
            console.log('paused')
        }
    }

    stopMenuMusic() {
        this.audio.pause();
        this.musicStatus = 'Play Music'
        this.playing = false
    }

    playFightMusic() {
        this.audio.src = this.fightMusic[Math.floor(Math.random() * this.fightMusic.length)];
        this.audio.load();
        this.audio.volume = 0.05;
        this.audio.loop = true;
        this.audio.play()
    }

    stopFightMusic() {
        this.audio.pause()
    }

    volumeUp() {
        this.audio.volume += 0.1;
    }

    volumeDown() {
        this.audio.volume -= 0.1;
    }

    volumeMute() {
        if (this.isMuted) {
            this.audio.muted = false;
            this.isMuted = false;
        } else {
            this.audio.muted = true;
            this.isMuted = true;
        }
    }
}