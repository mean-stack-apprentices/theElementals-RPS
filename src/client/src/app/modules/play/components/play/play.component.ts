import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SocketService } from 'src/app/services/socket.service';
import { SoundsService } from 'src/app/services/sounds.service';
import { AppState } from 'src/app/store';
import { loggedInSelector } from 'src/app/store/user/user.selectors';
import { User } from '../../../../../../../shared/models/user.model';
import { PlayService } from '../../play.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  loggedInUser: User | null = null

  constructor(
    private store: Store<AppState>,
    private playService: PlayService,
    private socketService: SocketService,
    private sounds: SoundsService,
    ) {
      this.store.select(loggedInSelector).subscribe(user => this.loggedInUser = user)
    }

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
    this.socketService.playComputer(this.loggedInUser)
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
