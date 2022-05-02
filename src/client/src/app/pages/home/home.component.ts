import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { SoundsService } from 'src/app/services/sounds.service';
import { AppState } from 'src/app/store';
import { loggedInSelector } from 'src/app/store/user/user.selectors';
import { User } from '../../../../../shared/models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  baseURL: string = this.api.baseURL
  loggedIn$: Observable<User | null>
  constructor(
      private store: Store<AppState>,
      private api: ApiService,
      private sounds: SoundsService
    ) {
      this.loggedIn$ = this.store.select(loggedInSelector)
      console.log(this.loggedIn$)
  }

  musicStatus = this.sounds.musicStatus;

  playMusic() {
    this.sounds.playMenuMusic()
  }

  ngOnInit(): void {

  }

}
