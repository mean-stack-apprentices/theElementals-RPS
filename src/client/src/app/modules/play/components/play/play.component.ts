import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { loggedInSelector } from 'src/app/store/user/user.selectors';
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
    this.router.navigate(['/game'])
  }

  checkIfLoggedIn(route: string){
      const checkPromise = new Promise((res, rej) => {
          rej(!this.loggedIn)
      })

      checkPromise.then(() => {
        if (route ==="online"){
          this.router.navigate(['online-match'])
        }else if (route === "tournament"){
          this.router.navigate(['tournament'])
        }
      }).catch(() => {
        alert('Please log in to continue')
        setTimeout(() => {
          this.router.navigateByUrl('/home/sign-in')
        }, 500)
      })
  }
}
