import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaderboardRoutingModule } from './leaderboard-routing.module';
import { LeaderboardComponent } from 'src/app/modules/leaderboard/components/leaderboard/leaderboard.component';


@NgModule({
  declarations: [
    LeaderboardComponent
  ],
  imports: [
    CommonModule,
    LeaderboardRoutingModule
  ]
})
export class LeaderboardModule { }
