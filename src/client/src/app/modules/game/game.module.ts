import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './components/game-arena/game.component';
import { VolumeControlComponent } from '../../volume-control/volume-control.component';
import { MusicSelectorComponent } from 'src/app/music-selector/music-selector.component';


@NgModule({
  declarations: [
    GameComponent,
    VolumeControlComponent,
    MusicSelectorComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule
  ]
})
export class GameModule { }
