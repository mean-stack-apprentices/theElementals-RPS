import { Component, OnInit } from '@angular/core';
import { SoundsService } from '../services/sounds.service';

@Component({
  selector: 'app-volume-control',
  templateUrl: './volume-control.component.html',
  styleUrls: ['./volume-control.component.scss']
})
export class VolumeControlComponent implements OnInit {

  volumeLevel = 1;

  constructor(private sounds: SoundsService) { }

  ngOnInit(): void {
  }

  volumeUp() {
    this.sounds.volumeUp();
    this.volumeLevel += 1;
  }

  volumeDown() {
    this.sounds.volumeDown();
    this.volumeLevel -= 1;
  }

  volumeMute() {
    this.sounds.volumeMute();
  }

}
