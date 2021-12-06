import { Injectable } from '@angular/core';
import { Player } from '../../../../shared/models/player.model';

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

  findRoundWinner(pLeft: Player, pRight: Player) {
    if (pLeft.optionSelction && pRight.optionSelction) {
      const l = pLeft.optionSelction
      const r = pRight.optionSelction
    
      if (l === 'rock' && r === 'rock') {
        return 'draw'
      }
      else if (l === 'rock' && r === 'paper') {
        return "pRight"
      }
      else if (l === 'rock' && r === 'scissors') {
        return "pLeft"
      }

      else if (l === 'paper' && r === 'rock') {
        return "pLeft"
      }
      else if (l === 'paper' && r === 'paper') {
        return "draw"
      }
      else if (l === 'paper' && r === 'scissors') {
        return "pRight"
      }

      else if (l === 'scissors' && r === 'rock') {
        return "pRight"
      }
      else if (l === 'scissors' && r === 'paper') {
        return "pLeft"
      }
      else if (l === 'scissors' && r === 'scissors') {
        return 'draw'
      }else {
        console.log('something went very wrong lol')
        return 'something went very wrong lol'
        
      }
    } else {
      console.log('something went very wrong lol')
      return 'something went very wrong lol'
    }
  }
}