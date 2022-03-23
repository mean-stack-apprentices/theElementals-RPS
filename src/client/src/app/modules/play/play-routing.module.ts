import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayComponent } from './components/play/play.component';

const routes: Routes = [
  {path: '', component: PlayComponent},
  {path: 'game', loadChildren:
  () => import('./modules/game/game.module').then(m => m.GameModule)}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayRoutingModule { }
