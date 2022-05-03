import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TournamentLobbyComponent } from './components/tournament-lobby/tournament-lobby.component';
import { TournamentComponent } from './components/tournament/tournament.component';

const routes: Routes = [
  {path: '', component: TournamentComponent},
  {path: 'lobby', component: TournamentLobbyComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TournamentRoutingModule { }
