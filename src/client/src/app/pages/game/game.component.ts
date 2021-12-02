import { animate, state, style, transition, trigger } from '@angular/animations';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReducerManagerDispatcher, Store } from '@ngrx/store';
import { SocketService } from 'src/app/services/socket.service';
import { AppState } from 'src/app/store';
import { loggedInSelector } from 'src/app/store/selectors/user/user.selectors';
import { Player } from '../../../../../shared/models/player.model';

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
  activePlayer: Player;
  pLeft: Player;
  pRight: Player;
  loggedInUsername: string | undefined = undefined;
  backgroundString: string;
  fightImgShowing: boolean = false;
  started: boolean = false;
  constructor(
    private socketService: SocketService,
    private store: Store<AppState>,
    private route: ActivatedRoute,
    ) {
      this.backgroundString = this.getBackground();
      // setTimeout(() => {
      //   this.playFight(); 
      // }, 3000);
      //this.fightImgShowing = true
      this.store.select(loggedInSelector).subscribe(user => this.loggedInUsername = user?.username)
      const state = this.route.snapshot.data.gameInfo;
      
      if (state.loggedIn){
        this.pLeft = new Player(this.loggedInUsername!)
        this.activePlayer = this.pLeft
        this.pRight = new Player('Computer')
      } else {
        this.pLeft = new Player('Player1')
        this.activePlayer = this.pLeft
        this.pRight = new Player('Computer')
        this.pRight.ready = true
      }
    }

  ngOnInit(): void {
    //this.playSound();
    //this.fightImgShowing = true
  }

  healthBarColor(health: number) {
    switch (health){
      case 3: 
        return 'green';
      case 2:
        return 'yellow';
      default :
        return 'red';
    }
  }

  getBackground() {
    const imgArray = [
      "Street-Fighter-background-Street-fighter-characters-.jpg",
      "Mm6kmlz.gif",
      "Blanka-Stage-Background-Bitmap-GIF-Without-Characters-from-Street-Fighter-Alpha-3-Arcade.gif",
      "animated-gifs-of-fighting-game-backgrounds-51.gif", 
      "80f9d4af066c7c4245b80ffd41975f29.gif"
    ]
    const random = Math.floor(Math.random() * imgArray.length);
    return imgArray[random]
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

  checkPlayersReady() {
    if(this.pLeft.ready && this.pRight.ready) {
      this.started = true;
      this.playFight()
      setTimeout(()=>{
        this.fightImgShowing = false
        this.makeAllNotReady()
        console.log(this.pRight.ready)
      }, 2000)
      
    }
  }

  makeReady(player: Player) {
    player.makeReady()
    this.checkPlayersReady()
  }
  makeAllNotReady() {
    this.pLeft.ready = false;
    this.pRight.ready = false;
  }

}
