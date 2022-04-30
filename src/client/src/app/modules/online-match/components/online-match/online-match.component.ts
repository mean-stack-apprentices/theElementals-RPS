import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-online-match',
  templateUrl: './online-match.component.html',
  styleUrls: ['./online-match.component.scss']
})
export class OnlineMatchComponent implements OnInit {
  gamePin: string = ''
  constructor(
    private socketService: SocketService,
    private navigation: NavigationService
  ) { }

  ngOnInit(): void {
  }

  back(): void {
    this.navigation.back()
  }

  socketRequestCreateMatch() {
    this.socketService.createMatch()
  }
  socketRequestFindMatch() {
    this.socketService.findCreatedMatch(this.gamePin)
  }

}
