import { Injectable } from "@angular/core";

@Injectable()
export class SoundsService {
    constructor() {
        this.hitAudio.volume = this.soundVolume;
        this.drawAudio.volume = this.soundVolume;
        this.gameOverAudio.volume = this.soundVolume,
        this.gameEndAudio.volume = this.soundVolume
    }

    playing = false;
    musicAudio = new Audio();
    hitAudio = new Audio();
    drawAudio = new Audio();
    gameOverAudio = new Audio();
    gameEndAudio = new Audio();
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

    hitSounds = [
        '../../assets/sounds/game/hits/hit_punch_l.wav',
        '../../assets/sounds/game/hits/hit_punch_m.wav',
        '../../assets/sounds/game/hits/hit_punch_h.wav'
    ]

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
        this.musicAudio.volume = this.soundVolume;
        this.playing = false
    }

    playFightMusic() {
        this.musicAudio.src = Object.values(this.fightMusic)[this.randomSongNumber];
        this.songTitle = Object.keys(this.fightMusic)[this.randomSongNumber]
        this.musicAudio.load();
        this.musicAudio.volume = this.soundVolume;
        this.musicAudio.loop = true;
        this.musicAudio.play()
    }

    stopFightMusic() {
        this.musicAudio.pause()
        this.gameEndAudio.pause()
    }

    playGameOverMusic() {
        this.gameOverAudio.src = '../../assets/sounds/game/game-over.mp3'
        this.gameOverAudio.play()
    }

    playGameEndMusic() {
        this.gameEndAudio.src = '../../assets/sounds/game/game-end.mp3'
        this.gameEndAudio.loop = true;
        this.gameEndAudio.play();
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
        this.hitAudio.volume += 0.1;
        this.drawAudio.volume += 0.1;
        this.gameOverAudio.volume += 0.1;
        this.gameEndAudio.volume += 0.1;
    }

    volumeDown() {
        this.musicAudio.volume -= 0.1;
        this.hitAudio.volume -= 0.1;
        this.drawAudio.volume -= 0.1;
        this.gameOverAudio.volume -= 0.1;
        this.gameEndAudio.volume -= 0.1;
    }

    volumeMute() {
        if (this.isMuted) {
            this.musicAudio.muted = false;
            this.hitAudio.muted = false;
            this.drawAudio.muted = false;
            this.isMuted = false;
            this.gameOverAudio.muted = false;
            this.isMuted = false;
        } else {
            this.musicAudio.muted = true;
            this.hitAudio.muted = true
            this.drawAudio.muted = true;
            this.musicAudio.muted = true;
            this.gameOverAudio.muted = true;
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