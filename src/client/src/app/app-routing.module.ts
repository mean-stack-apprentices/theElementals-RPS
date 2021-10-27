import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { PlayComponent } from './components/play/play.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:'home', component: HomeComponent,
    children: [
      {path:'play', component: PlayComponent},
      {path:'leaderboard', component: LeaderboardComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
