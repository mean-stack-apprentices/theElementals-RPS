import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaderboardRoutingModule } from './leaderboard-routing.module';
import { LeaderboardComponent } from 'src/app/modules/leaderboard/components/leaderboard/leaderboard.component';
import { AllPlayersComponent } from './presentation/all-players/all-players.component';
import { HeaderComponent } from './presentation/header/header.component';


@NgModule({
  declarations: [
    LeaderboardComponent,
    AllPlayersComponent,
    HeaderComponent,

  ],
  imports: [
    CommonModule,
    LeaderboardRoutingModule,

  ]
})
export class LeaderboardModule { }
