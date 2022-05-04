import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { SocketService } from 'src/app/services/socket.service';
import { SoundsService } from 'src/app/services/sounds.service';
import { TournamentService } from '../../services/tournament.service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})
export class TournamentComponent implements OnInit {

  constructor(
    private tournamentService: TournamentService, 
    private navigation: NavigationService,
    private sounds: SoundsService
    ) { }

  ngOnInit(): void {
    
  }

  createTournament(){
    this.tournamentService.createTournament()
  }

  back() {
    this.navigation.back()
  }

  playSelectSound() {
    this.sounds.playSelectSound()
  }

  playHoverSound() {
    this.sounds.playHoverSound()
  }
}
