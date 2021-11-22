import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { PlayComponent } from './components/play/play.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { GameComponent } from './pages/game/game.component';
import { HomeComponent } from './pages/home/home.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

const routes: Routes = [
  {path: 'game', component: GameComponent},
  {path:'home', component: HomeComponent,
    children: [
      {path:'play', component: PlayComponent},
      {path:'leaderboard', component: LeaderboardComponent},
      {path:'sign-in', component: SignInComponent},
    ]
  },
  {path: 'sign-up', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
