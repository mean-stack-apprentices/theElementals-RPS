import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TournamentRoutingModule } from './tournament-routing.module';
import { TournamentComponent } from './components/tournament/tournament.component';
import { TournamentLobbyComponent } from './components/tournament-lobby/tournament-lobby.component';


@NgModule({
  declarations: [
    TournamentComponent,
    TournamentLobbyComponent
  ],
  imports: [
    CommonModule,
    TournamentRoutingModule
  ]
})
export class TournamentModule { }
