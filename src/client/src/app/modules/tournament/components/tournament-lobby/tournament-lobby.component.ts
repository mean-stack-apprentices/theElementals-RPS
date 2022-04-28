import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SocketService } from 'src/app/services/socket.service';
import { AppState } from 'src/app/store';
import { loggedInSelector } from 'src/app/store/user/user.selectors';
import { User } from '../../../../../../../shared/models/user.model';
import { TournamentService } from '../../services/tournament.service';

@Component({
  selector: 'app-tournament-lobby',
  templateUrl: './tournament-lobby.component.html',
  styleUrls: ['./tournament-lobby.component.scss']
})
export class TournamentLobbyComponent implements OnInit {

  guestPlayer!: string
  loggedIn: User | null = null
  tPin: string | undefined

  constructor(private socketService: SocketService, private store: Store<AppState>) {
    this.store.select(loggedInSelector).subscribe(data => this.loggedIn = data)
    this.guestPlayer = this.socketService.guestUsername
   }

  ngOnInit(): void {
    this.tPin = this.socketService.tPin
    console.log(this.tPin)
  }



}
