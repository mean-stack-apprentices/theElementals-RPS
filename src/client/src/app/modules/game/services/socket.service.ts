import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';
import { AppState } from 'src/app/store';
import { setGamePin, setGamePlayers } from 'src/app/store/game/game.actions';
import { loggedInSelector } from 'src/app/store/user/user.selectors';
import { Player } from '../../../../../../shared/models/player.model';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  public socketId!: string
  public sID!: string

  loggedInUsername: string | undefined;

  // public sid$ = this.socket.fromEvent('connect').pipe(map(() => this.socket.ioSocket.id))

  constructor(
    private socket: Socket,
    private store: Store<AppState>,
    private router: Router,
    ) {
    // guest id string
    this.socket.fromEvent('connect').subscribe(()=> {
      let reg = /([-_])\w+/gi
      let ran = String(Math.ceil(Math.random()  * 100000))
      this.socketId = this.socket.ioSocket.id
      this.sID = this.socket.ioSocket.id
        if (reg.test(this.sID)){
          this.sID = 'guest' + this.sID.substring(5,12).replace(reg, ran).toLowerCase()
        }else {
          this.sID = 'guest' + this.sID.substring(5,12).toLowerCase()
        }
    })
    // on listeners
    this.socket.on('match created, waiting for opponent', (payload:{gamePin: string}) => {
      this.store.dispatch(setGamePin(payload));
      console.log('match created, waiting for opponent',payload)
      this.router.navigate(['game'])

    })
    this.socket.on('found game, joining player',(gameInfo: {pLeft:Player, pRight:Player}) => {
      this.store.dispatch(setGamePlayers(gameInfo));
      console.log('found game, joining player', gameInfo)
      this.router.navigate(['game'])
    })
  }

  createMatch() {
    this.store.select(loggedInSelector).subscribe(user => this.loggedInUsername = user?.username)
    this.socket.emit('requesting to create match',{
      emittingPlayer: new Player(this.loggedInUsername ? this.loggedInUsername: this.sID, this.socketId )
    })
  }
  findCreatedMatch(gamePin: string) {
    this.store.select(loggedInSelector).subscribe(user => this.loggedInUsername = user?.username)
    this.socket.emit('find created game',{
      emittingPlayer: new Player(this.loggedInUsername ? this.loggedInUsername: this.sID, this.socketId ),
      requestedGamePin: gamePin
    })
  }

}
