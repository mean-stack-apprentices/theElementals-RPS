import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/modules/game/services/socket.service';

@Component({
  selector: 'app-online-match',
  templateUrl: './online-match.component.html',
  styleUrls: ['./online-match.component.scss']
})
export class OnlineMatchComponent implements OnInit {
  gamePin: string = ''
  constructor(
    private socketService: SocketService,
  ) { }

  ngOnInit(): void {
  }

  socketRequestCreateMatch() {
    this.socketService.createMatch()
  }
  socketRequestFindMatch() {
    this.socketService.findCreatedMatch(this.gamePin)
  }

}
