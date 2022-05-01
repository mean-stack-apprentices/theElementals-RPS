import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store';
import { gamePinSelector } from 'src/app/store/game/game.selectors';

@Component({
  selector: 'app-game-pin-display',
  templateUrl: './game-pin-display.component.html',
  styleUrls: ['./game-pin-display.component.scss']
})
export class GamePinDisplayComponent implements OnInit {
  gamePin$!: Observable<string | null>

  constructor(
    private store: Store<AppState>,
  ) { 
    this.gamePin$ = this.store.select(gamePinSelector)
  }

  ngOnInit(): void {
  }

}
