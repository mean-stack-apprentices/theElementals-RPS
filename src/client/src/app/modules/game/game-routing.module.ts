import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './components/game-arena/game.component';
import { UserStateResolver } from './resolvers/user-state.resolver';

const routes: Routes = [
  {path: '', component: GameComponent, resolve: {userState: UserStateResolver}},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
