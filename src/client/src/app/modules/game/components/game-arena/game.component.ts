import { animate, state, style, transition, trigger } from '@angular/animations';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Navigation } from '@angular/router';
import { ReducerManagerDispatcher, Store } from '@ngrx/store';
import { UserStateResolver } from 'src/app/modules/game/resolvers/user-state.resolver';
import { GameService } from 'src/app/modules/game/services/game.service';
import { SocketService } from 'src/app/services/socket.service';
import { AppState } from 'src/app/store';
import { loggedInSelector } from 'src/app/store/user/user.selectors';
import { Player } from '../../../../../../../shared/models/player.model';
import { NavigationService } from 'src/app/services/navigation.service';
import { gameStateSelector, pLeftSelector, pRightSelector } from 'src/app/store/game/game.selectors';
import { SoundsService } from 'src/app/services/sounds.service';
import { Observable } from 'rxjs';
import { setResult } from 'src/app/store/game/game.actions';

@Component({
  selector: 'app-game',
  animations: [
    trigger('inOut', [
      // ...
      state('in', style({
        display: 'block',
      })),
      state('out', style({
        height: '0px'
      })),
      transition('* => in', [
        animate('1s')
      ]),
      transition('in => out', [
        animate('0.3s')
      ]),
    ]),
  ],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  gameState: any
  pLeft$: Observable<any> | null = null  
  pRight$: Observable<any> | null = null  

  loggedInUsername: string | undefined = undefined;
  
  backgroundString: string;
  fightImgShowing: boolean = false;
  drawImgString: string | null = null;
  drawImgShowing: boolean = false;
  fatalityImgShowing: boolean = false

  vsComputer: boolean = false
  // id$ = this.socketService.sid$
  constructor(
    private socketService: SocketService,
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private gameService: GameService, 
    private navigation: NavigationService,
    private sounds: SoundsService
    ) {
      this.backgroundString = this.getBackground();
      this.store.select(loggedInSelector).subscribe(user => this.loggedInUsername = user?.username)
      this.store.select(gameStateSelector).subscribe(gs => {
        this.gameState = gs
        this.runChecks()
      })
      const userStateSnapshot = this.route.snapshot.data.userState;

      console.log(this.gameState)

      this.pLeft$ = this.store.select(pLeftSelector)
      this.pRight$ = this.store.select(pRightSelector)
    
    }

  ngOnInit(): void {
    this.sounds.stopMenuMusic()
    this.sounds.randomizeSong()
    this.sounds.playFightMusic()
  }

  ngOnDestroy() {
    this.sounds.stopFightMusic()
    this.sounds.resetHitSoundVolume()
    this.sounds.resetVolumeMute()
    this.sounds.resetDrawSoundVolume()
    this.sounds.resetGameOverMusicVolume()
    this.sounds.resetGameEndMusicVolume()
  }

  healthBarColor(health: number) {
    switch (health) {
      case 3:
        return 'green';
      case 2:
        return 'yellow';
      default :
        return 'red';
    }
  }

  getBackground() {
    const backgroundImgArray = [
      "Street-Fighter-background-Street-fighter-characters-.jpg",
      "Mm6kmlz.gif",
      "Blanka-Stage-Background-Bitmap-GIF-Without-Characters-from-Street-Fighter-Alpha-3-Arcade.gif",
      "animated-gifs-of-fighting-game-backgrounds-51.gif",
      "80f9d4af066c7c4245b80ffd41975f29.gif"
    ]
    const random = Math.floor(Math.random() * backgroundImgArray.length);
    return backgroundImgArray[random]
  }

  getDrawImg() {
    const drawImgArray = [
      "knot0.png",
      "tie0.png",
      "tie1.png",
      "tie2.gif",
    ]
    const random = Math.floor(Math.random() * drawImgArray.length);
    console.log(drawImgArray[random])
    this.drawImgString = drawImgArray[random]
  }

  playFight() {
    this.fightImgShowing = true

    let fightSound = new Audio();
    fightSound.src = "../assets/sounds/321913__jrc-yt__fight.mp3";
    fightSound.autoplay = true;
    fightSound.muted = false;
    fightSound.load();
    fightSound.play();
    console.log('sound??')
  }

  checkForWinner() {
    if (this.gameState.pLeft.health === 0 || this.gameState.pRight.health === 0) {
      this.gameOver(this.gameState.pLeft.health === 0 ? this.gameState.pRight : this.gameState.pLeft)
    } else {
      this.makeAllNotReady()
    }
  }

  checkGameStarted() {
    // if not started and everyone is ready?.... set started and play fight
    if(!this.gameState.isStarted && this.gameState.pLeft.ready && this.gameState.pRight.ready) {
      this.socketService.setIsStarted(this.gameState.gamePin, true)
      this.playFight()
      setTimeout(()=>{
        this.fightImgShowing = false
        this.makeAllNotReady()
      }, 2000)
    }
  }

  checkResult() {
    if (this.gameState.result) {
      /// Results are a draw???
      if (this.gameState.result.draw) {
        this.getDrawImg()
        this.drawImgShowing = true
        this.sounds.playDrawSound()

        setTimeout(() => {
          this.drawImgShowing = false
          this.makeAllNotReady()
        }, 2000);
        
      } else {
        this.sounds.playHitSound()
        setTimeout(() => {
          this.checkForWinner()
        }, 2000);

      }
      this.clearResult()
    }
  }

  clearResult() {
    this.store.dispatch(setResult({result: null}))
  }

  async makeReady(side: 'pLeft' | 'pRight') {
      await this.socketService.setSideToReady(this.gameState.gamePin, side)
  }

  async makeNotReady(side: 'pLeft' | 'pRight') {
    await this.socketService.setSideToNotReady(this.gameState.gamePin, side)
  }

  makeAllNotReady() {
    this.makeNotReady('pLeft');
    this.makeNotReady('pRight')
  }
  async select(side: 'pLeft' | 'pRight', selection: 'rock' | 'paper' | 'scissors') {
    await this.socketService.setPlayersSelection(this.gameState.gamePin, side, selection);
  }

  gameOver(winner: Player) {
    this.fatalityImgShowing = true
    this.sounds.stopFightMusic();
    this.sounds.playGameOverMusic();
    setTimeout(() => {
      this.sounds.playGameEndMusic()
    }, 3000)
    console.log(`${winner.username} Wins!!`)
  }

  playMoveSelect() {
    this.sounds.playMoveSelectSound()
  }

  back(): void {
    this.navigation.back()
  }
  runChecks() {
    this.checkGameStarted()
    this.checkResult()

  }
}
