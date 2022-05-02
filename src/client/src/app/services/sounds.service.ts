import { Injectable } from "@angular/core";

@Injectable()
export class SoundsService {
    constructor() { }

    playing = false;
    audio = new Audio();
    musicStatus = 'Play Music';


    playSound() {
        if (this.playing === false) {
            this.audio.src = "../../../assets/sounds/menu.mp3";
            this.audio.load();
            this.audio.volume = 0.1;
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

    stopSound() {
        this.audio.pause();
        this.musicStatus = 'Play Music'
        this.playing = false
    }
}