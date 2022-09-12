import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';
import { AppState } from 'src/app/store';
import { setActivePlayer, setGamePin, setGamePlayers, setIsStarted, setResult } from 'src/app/store/game/game.actions';
import { loggedInSelector } from 'src/app/store/user/user.selectors';
import { Player } from '../../../../shared/models/player.model';
import { Result } from '../../../../shared/models/result.model';
import { User } from '../../../../shared/models/user.model';


@Injectable({
  providedIn: 'root'
})
export class SocketService {

  public socketId!: string
  public guestUsername!: string

  loggedInUsername: string | undefined;

  tPin: string | undefined
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
        if (reg.test(this.socketId)){
          this.guestUsername = 'guest' + this.socketId.substring(5,12).replace(reg, ran).toLowerCase()
        }else {
          this.guestUsername = 'guest' + this.socketId.substring(5,12).toLowerCase()
        }
    })
    // on listeners
   
    this.socket.on('found game, joining player',(playerInfo: {pLeft:Player, pRight:Player}) => {
      this.store.dispatch(setGamePlayers(playerInfo));
      
    })
    this.socket.on('route', (urlString: string) => {
      this.router.navigate([urlString])
    })
    this.socket.on('set game pin', (gamePin: string) => {
      this.store.dispatch(setGamePin({gamePin}));
    })
    this.socket.on('set isStarted', (isStarted: boolean) => {
      this.store.dispatch(setIsStarted({isStarted}))
    })
    this.socket.on('set result', (result: Result) => {
      this.store.dispatch(setResult({result}))
    })
    this.socket.on('update game players', (playerInfo: {pLeft:Player, pRight:Player}) => {
      this.store.dispatch(setGamePlayers(playerInfo));
    })
  }

  createMatch() {
    this.store.select(loggedInSelector).subscribe(user => this.loggedInUsername = user?.username)
    const activePlayer = new Player(this.loggedInUsername ? this.loggedInUsername: this.guestUsername, this.socketId)
    this.store.dispatch(setActivePlayer({activePlayerUsername: activePlayer.username}))
    this.socket.emit(
      'requesting to create match',
      {
      emittingPlayer: activePlayer
      },
      () => {
       
      }
    )
  }
  createTournament(){
    this.socket.emit('create-tournament', this.socketId, (response:any) => {
      this.tPin = response
      this.router.navigate(['/tournament/lobby'])
    })
  }
  findCreatedMatch(gamePin: string) {
    this.store.select(loggedInSelector).subscribe(user => this.loggedInUsername = user?.username)
    const activePlayer = new Player(this.loggedInUsername ? this.loggedInUsername: this.guestUsername, this.socketId )
    this.socket.emit(
      'find created game',
      {
        emittingPlayer: activePlayer,
        requestedGamePin: gamePin
      },
      ()=>{
        this.store.dispatch(setActivePlayer({activePlayerUsername: activePlayer.username}))
      }
    )
  }
  playComputer(loggedIn: User | null) {
    if (loggedIn) {
      const activePlayer = new Player(this.loggedInUsername ? this.loggedInUsername: this.guestUsername, this.socketId)
      this.store.dispatch(setActivePlayer({activePlayerUsername: activePlayer.username}))
      this.socket.emit('requesting to play computer',{
        emittingPlayer: activePlayer
      })
    }
  }
  setPlayersSelection(gamePin: string, side: 'pLeft' | 'pRight', selction: 'rock' | 'paper' | 'scissors') {
    this.socket.emit("request set player's selection", {gamePin, side, selction})
  }
  setSideToNotReady(gamePin: string, side: 'pLeft' | 'pRight') {
    this.socket.emit('request set side to NOT ready', {gamePin, side})
  }
  setSideToReady(gamePin: string, side: 'pLeft' | 'pRight') {
    this.socket.emit('request set side to ready', {gamePin, side})
  }
  setIsStarted(gamePin: string, bool: boolean) {
    this.socket.emit('request set isStarted', {gamePin, bool})
  }
}


