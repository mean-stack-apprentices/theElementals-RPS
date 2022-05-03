import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayRoutingModule } from './play-routing.module';
import { PlayComponent } from './components/play/play.component';


@NgModule({
  declarations: [
    PlayComponent,

  ],
  imports: [
    CommonModule,
    PlayRoutingModule,

  ]
})
export class PlayModule { }
