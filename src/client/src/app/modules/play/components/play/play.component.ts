import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store';
import { loggedInSelector } from 'src/app/store/selectors/user/user.selectors';
import { User } from '../../../../../../../shared/models/user.model';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {
  loggedIn: User | null = null
  constructor(
    private store: Store<AppState>,
    private router: Router,
    ) {
    this.store.select(loggedInSelector).subscribe(data => this.loggedIn = data)
   }

  ngOnInit(): void {
  }
   buttonColor() {
  //   if (this.loggedIn ===null) {
  //     return 'darkgrey'
  //   }else {
  //     return
  //   }
  }

  playComputer() {
    this.router.navigate(['game'])
  }
  playOnline() {
    if (!this.loggedIn){
      alert('Please log in to play online')
    } else {
      this.router.navigate(['online'])
    }
  }

}
