import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { OnlineMatchComponent } from './pages/online-match/online-match.component';
import { HomeComponent } from './pages/home/home.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LobbyComponent } from './pages/lobby/lobby.component';
import { LobbyCreatedComponent } from './components/lobby-created/lobby-created.component';

const routes: Routes = [
  {path: 'game', loadChildren:
    () => import('./modules/game/game.module').then(m => m.GameModule)},
  {path:'home', component: HomeComponent,
    children: [
      {path:'leaderboard', loadChildren:
      () => import('./modules/leaderboard/leaderboard.module').then(m => m.LeaderboardModule)},
      {path:'play', loadChildren:
        () => import('./modules/play/play.module').then(m => m.PlayModule)},
      {path:'sign-in', component: SignInComponent},
    ]
  },
  {path: 'online-match', component: OnlineMatchComponent},
  {path: 'lobby', component: LobbyComponent},
  {path: 'lobby/:roomID', component: LobbyCreatedComponent},
  {path: 'sign-up', component: SignUpComponent},
  { path: '**', redirectTo: 'home/play'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
