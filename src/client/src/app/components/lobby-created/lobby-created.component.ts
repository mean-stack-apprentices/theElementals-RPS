import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SocketService } from 'src/app/modules/game/services/socket.service';
import { AppState } from 'src/app/store';
import { loggedInSelector } from 'src/app/store/selectors/user/user.selectors';
import { User } from '../../../../../shared/models/user.model';

@Component({
  selector: 'app-lobby-created',
  templateUrl: './lobby-created.component.html',
  styleUrls: ['./lobby-created.component.scss']
})
export class LobbyCreatedComponent implements OnInit {
  guestPlayer!: any
  roomName!: any
  player!: any
  loggedIn: User | null = null

  constructor(private socketService: SocketService, private store: Store<AppState>) {
    this.store.select(loggedInSelector).subscribe(data => this.loggedIn = data)
    this.guestPlayer = this.socketService.sID
    this.roomName = this.socketService.roomID
  }

  ngOnInit(): void {
  }

}
