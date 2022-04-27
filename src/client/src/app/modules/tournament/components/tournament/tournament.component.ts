import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})
export class TournamentComponent implements OnInit {

  constructor(private socketService: SocketService) { }

  ngOnInit(): void {
  }

  createTournament(){
    this.socketService.createTournament()
  }
}
