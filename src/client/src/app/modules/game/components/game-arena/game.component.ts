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
import { gameStateSelector } from 'src/app/store/game/game.selectors';
import { SoundsService } from 'src/app/services/sounds.service';

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
      this.store.select(gameStateSelector).subscribe(gs => this.gameState = {...gs})
      const userStateSnapshot = this.route.snapshot.data.userState;

      console.log(this.gameState)
      //this.gameState = {}
      if (this.gameState.vsComputer){
        this.vsComputer = true;
        this.gameState.pLeft = new Player(this.loggedInUsername ? this.loggedInUsername : this.socketService.guestUsername)
        this.gameState.activePlayerUsername = this.gameState.pLeft.username
        this.gameState.pRight = new Player('Computer')
        this.gameState.pRight.ready = true
      } else {
        this.gameState
        //Match where user not logged in and playing computer
        
      //   this.pLeft = new Player(`${this.socketService.guestUsername}`)
      //   this.activePlayer = this.pLeft
      //   this.pRight = new Player('Computer')
      //   this.pRight.ready = true
      }
    }

  ngOnInit(): void {
    this.sounds.stopMenuMusic()
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

//// IMPORTANT
  checkPlayersReady() {
    if(!this.gameState.isStarted && this.gameState.pLeft.ready && this.gameState.pRight.ready) {
      this.vsComputer ? this.gameState.isStarted = true : this.socketService.setIsStarted(this.gameState.gamePin, true)
      this.playFight()
      setTimeout(()=>{
        this.fightImgShowing = false
        this.makeAllNotReady()
      }, 2000)
    }
    else if (this.gameState.isStarted && this.gameState.pLeft.ready && this.gameState.pRight.ready) {
      switch (this.gameService.findRoundWinner(this.gameState.pLeft, this.gameState.pRight)) {
        case 'draw':
          this.getDrawImg()
          this.drawImgShowing = true
          console.log('twas a draw')
          setTimeout(() => {
            this.drawImgShowing = false
            this.makeAllNotReady()
          }, 2000);
          this.sounds.playDrawSound()
          break
        case "pLeft":
          if (this.vsComputer){
            this.gameState.pRight.loseHealth()
          } else {
            this.socketService.decreasePlayersHealth(this.gameState.gamePin, 'pRight')
          }
          if (this.gameState.pRight.health === 0){
            this.gameOver(this.gameState.pLeft)
          } else {
            setTimeout(() => {
              this.makeAllNotReady()
            }, 2000);
          }
          this.sounds.playHitSound()
          break
        case "pRight":
          if (this.vsComputer){
            this.gameState.pLeft.loseHealth()
          } else {
            this.socketService.decreasePlayersHealth(this.gameState.gamePin, 'pLeft')
          }
          if (this.gameState.pLeft.health === 0){
            this.gameOver(this.gameState.pRight)
          } else {
            setTimeout(() => {
              this.makeAllNotReady()
            }, 2000);
          }
          this.sounds.playHitSound()
      }

    }
  }

  async makeReady(side: 'pLeft' | 'pRight') {
    if (this.vsComputer) {
      this.gameState[side].makeReady()
      this.checkPlayersReady()
    }else {
      await this.socketService.setSideToReady(this.gameState.gamePin, side)
      setTimeout(() => { ///TEMPORARY
        this.checkPlayersReady()
      }, 2000);
      //this.checkPlayersReady() 
    }
  }

  async makeNotReady(side: 'pLeft' | 'pRight') {
    await this.socketService.setSideToNotReady(this.gameState.gamePin, side)
  }

  makeAllNotReady() {
    if (this.vsComputer){
      this.gameState.pLeft.ready = false;
      this.gameState.pRight.ready = false;

      setTimeout(() => {
        this.select('pRight', this.gameService.computerSelection())
      }, Math.random() * 2000 + 2000);
    } else {
      this.makeNotReady('pLeft');
      this.makeNotReady('pRight')
    }
  }
  async select(side: 'pLeft' | 'pRight', selection: 'rock' | 'paper' | 'scissors') {
    if (this.vsComputer) {
    this.gameState[side].optionSelction = selection;
    this.gameState[side].ready = true;
    this.checkPlayersReady();
    } else {
      await this.socketService.setPlayersSelection(this.gameState.gamePin,side, selection);
      await this.makeReady(side)
      this.checkPlayersReady()
    }
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
}
