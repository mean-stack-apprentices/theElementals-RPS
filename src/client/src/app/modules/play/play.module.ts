import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayRoutingModule } from './play-routing.module';
import { PlayComponent } from './components/play/play.component';
import { OnlineMatchComponent } from './components/online-match/online-match.component';


@NgModule({
  declarations: [
    PlayComponent,
    OnlineMatchComponent,

  ],
  imports: [
    CommonModule,
    PlayRoutingModule,

  ]
})
export class PlayModule { }
