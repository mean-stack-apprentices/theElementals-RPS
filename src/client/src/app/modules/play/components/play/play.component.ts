import { Component, OnInit } from '@angular/core';
import { SoundsService } from 'src/app/services/sounds.service';
import { PlayService } from '../../play.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  constructor(private playService: PlayService,
    private sounds: SoundsService) {}

  ngOnInit(): void {
    
  }
   buttonColor() {
  //   if (this.loggedIn ===null) {
  //     return 'darkgrey'
  //   }else {
  //     return
  //   }
  }

  playComputer() {
    this.playService.playComputer()
  }

  checkIfLoggedIn(route: string){
    this.playService.checkIfLoggedIn(route)
  }

  playHoverSound() {
    this.sounds.playHoverSound();
  }

  playSelectSound() {
    this.sounds.playSelectSound();
  }
}
