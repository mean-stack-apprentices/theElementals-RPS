import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnlineMatchRoutingModule } from './online-match-routing.module';
import { GamePinDisplayComponent } from './components/game-pin-display/game-pin-display.component';
import { OnlineMatchComponent } from './components/online-match/online-match.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OnlineMatchComponent,
    GamePinDisplayComponent,
  ],
  imports: [
    CommonModule,
    OnlineMatchRoutingModule,
    FormsModule
  ]
})
export class OnlineMatchModule { }
