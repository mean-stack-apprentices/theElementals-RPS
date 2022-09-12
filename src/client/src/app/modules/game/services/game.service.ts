import { Injectable } from '@angular/core';
import { Player } from '../../../../../../shared/models/player.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  selctions: ('rock' | 'paper' | 'scissors')[] = ['rock', 'paper', 'scissors']
  constructor() { }

  computerSelection() {
    const random = Math.floor(Math.random()* 3)
    console.log(this.selctions[random])
    return this.selctions[random]
  }
}