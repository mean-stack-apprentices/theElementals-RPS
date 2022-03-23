import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HomeComponent } from './pages/home/home.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

const routes: Routes = [
  {path:'home', component: HomeComponent,
    children: [
      {path:'play', loadChildren:
        () => import('./modules/play/play.module').then(m => m.PlayModule)
      },
      {path:'leaderboard', component: LeaderboardComponent},
      {path:'sign-in', component: SignInComponent},
    ]
  },
  {path: 'game', loadChildren:
    () => import('./modules/play/modules/game/game.module').then(m => m.GameModule)},
  {path: 'sign-up', component: SignUpComponent},
  { path: '**', redirectTo: 'home/play'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
