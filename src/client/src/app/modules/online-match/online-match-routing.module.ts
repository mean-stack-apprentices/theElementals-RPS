import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnlineMatchComponent } from 'src/app/modules/online-match/components/online-match/online-match.component';
import { GamePinDisplayComponent } from './components/game-pin-display/game-pin-display.component';

const routes: Routes = [
  {path: '', component: OnlineMatchComponent},
  {path: 'game-pin-display', component: GamePinDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnlineMatchRoutingModule { }
