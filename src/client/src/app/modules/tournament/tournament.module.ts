import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TournamentRoutingModule } from './tournament-routing.module';
import { TournamentComponent } from './components/tournament/tournament.component';
import { TournamentLobbyComponent } from './components/tournament-lobby/tournament-lobby.component';
import { TournamentpinComponent } from 'src/app/modules/tournament/presentation/tournamentpin/tournamentpin.component';


@NgModule({
  declarations: [
    TournamentComponent,
    TournamentLobbyComponent,
    TournamentpinComponent,
  ],
  imports: [
    CommonModule,
    TournamentRoutingModule
  ]
})
export class TournamentModule { }
