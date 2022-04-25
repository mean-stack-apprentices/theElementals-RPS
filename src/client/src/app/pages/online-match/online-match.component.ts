import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from 'src/app/modules/game/services/socket.service';

@Component({
  selector: 'app-online-match',
  templateUrl: './online-match.component.html',
  styleUrls: ['./online-match.component.scss']
})
export class OnlineMatchComponent implements OnInit {

  constructor(private socketService: SocketService) { }

  ngOnInit(): void {
  }

  createMatch(){
    this.socketService.createRoom()
  }
}
