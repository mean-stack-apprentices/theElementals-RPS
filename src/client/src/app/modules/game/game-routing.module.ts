import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './components/game-arena/game.component';
import { GameInfoResolver } from './resolvers/game-info.resolver';

const routes: Routes = [
  {path: '', component: GameComponent, resolve: {gameInfo: GameInfoResolver}},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
