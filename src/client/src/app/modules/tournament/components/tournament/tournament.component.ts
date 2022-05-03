import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { SocketService } from 'src/app/services/socket.service';
import { TournamentService } from '../../services/tournament.service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})
export class TournamentComponent implements OnInit {

  constructor(
    private tournamentService: TournamentService, 
    private navigation: NavigationService
    ) { }

  ngOnInit(): void {
    
  }

  createTournament(){
    this.tournamentService.createTournament()
  }

  back() {
    this.navigation.back()
  }
}
