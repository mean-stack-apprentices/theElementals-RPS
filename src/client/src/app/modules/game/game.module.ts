import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './components/game-arena/game.component';
import { VolumeControlComponent } from '../../volume-control/volume-control.component';


@NgModule({
  declarations: [
    GameComponent,
    VolumeControlComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule
  ]
})
export class GameModule { }
