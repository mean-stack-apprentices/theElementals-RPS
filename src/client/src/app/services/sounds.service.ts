import { Injectable } from "@angular/core";

@Injectable()
export class SoundsService {
    constructor() { }

    playing = false;
    musicAudio = new Audio();
    musicStatus = 'Play Music';
    isMuted = false;
    soundVolume = 0.1;
    fightMusic = {
        'Guile Theme': '../../assets/sounds/game/fight1.mp3',
        'Ryu Theme': '../../assets/sounds/game/fight2.mp3',
        'Spider-Man Theme': '../../assets/sounds/game/fight3.mp3',
        'Morrigan Theme': '../../assets/sounds/game/fight4.mp3',
        'Captain America Theme': '../../assets/sounds/game/fight5.mp3',
        'Ace Attorney Theme': '../../assets/sounds/game/fight6.mp3',
        'Ken Theme': '../../assets/sounds/game/fight7.mp3'
    }
    songTitle = '';
    randomSongNumber = Math.floor(Math.random() * Object.keys(this.fightMusic).length);
    songNumber = this.randomSongNumber;

    playMenuMusic() {
        if (this.playing === false) {
            this.musicAudio.src = "../../../assets/sounds/menu.mp3";
            this.musicAudio.load();
            this.musicAudio.volume = 0.1;
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
        this.musicAudio.src = Object.values(this.fightMusic)[this.randomSongNumber];
        this.songTitle = Object.keys(this.fightMusic)[this.randomSongNumber]
        this.musicAudio.load();
        this.musicAudio.volume = 0.1;
        this.musicAudio.loop = true;
        this.musicAudio.play()
    }

    stopFightMusic() {
        this.musicAudio.pause()
    }

    randomizeSong() {
        this.randomSongNumber = Math.floor(Math.random() * Object.keys(this.fightMusic).length);
    this.songNumber = this.randomSongNumber;
    }

    nextFightSong() {
        if (this.songNumber == Object.keys(this.fightMusic).length - 1) {
            this.songNumber = 0;
            this.songTitle = Object.keys(this.fightMusic)[this.songNumber];
            this.musicAudio.src = Object.values(this.fightMusic)[this.songNumber];
            this.musicAudio.play()
            this.musicAudio.loop = true;
        } else {
            this.songNumber++;
            this.songTitle = Object.keys(this.fightMusic)[this.songNumber];
            this.musicAudio.src = Object.values(this.fightMusic)[this.songNumber];
            this.musicAudio.play()
            this.musicAudio.loop = true;
        }

    }

    previousFightSong() {
        if (this.songNumber == 0) {
            this.songNumber = Object.keys(this.fightMusic).length - 1;
            this.songTitle = Object.keys(this.fightMusic)[this.songNumber];
            this.musicAudio.src = Object.values(this.fightMusic)[this.songNumber];
            this.musicAudio.play()
            this.musicAudio.loop = true;
        } else {
            this.songNumber--;
            this.songTitle = Object.keys(this.fightMusic)[this.songNumber];
            this.musicAudio.src = Object.values(this.fightMusic)[this.songNumber];
            this.musicAudio.play()
            this.musicAudio.loop = true;
        }

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