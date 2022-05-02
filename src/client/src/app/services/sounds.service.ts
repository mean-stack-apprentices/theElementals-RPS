import { Injectable } from "@angular/core";

@Injectable()
export class SoundsService {
    constructor() { }

    playing = false;
    audio = new Audio();
    musicStatus = 'Play Music';
    fightMusic = [
        '../../assets/sounds/fight1.mp3',
        '../../assets/sounds/fight2.mp3'
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
}