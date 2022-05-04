import { Component, OnInit } from '@angular/core';
import { SoundsService } from '../services/sounds.service';

@Component({
  selector: 'app-music-selector',
  templateUrl: './music-selector.component.html',
  styleUrls: ['./music-selector.component.scss']
})
export class MusicSelectorComponent implements OnInit {

  constructor(private sounds: SoundsService) { }

  songName = ''

  ngOnInit(): void {
    this.songName = this.sounds.songTitle
  }

  nextFightSong() {
    this.sounds.nextFightSong()
    this.songName = this.sounds.songTitle
  }

  previousFightSong() {
    this.sounds.previousFightSong()
    this.songName = this.sounds.songTitle
  }

}
