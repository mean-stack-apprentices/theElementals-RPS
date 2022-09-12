import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AppState } from 'src/app/store';
import { loggedInSelector } from 'src/app/store/user/user.selectors';
import { User } from '../../../../../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class PlayService {

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

  checkIfLoggedIn(route: string){
      const checkPromise = new Promise((resolve, reject) => {
        resolve(this.loggedIn)
      })

      checkPromise.then((response) => {
        if(response){
          route ==="online" ? this.router.navigate(['online-match']) : this.router.navigate(['tournament'])
        }else {
          alert('Please log in to continue')
          setTimeout(() => {
            this.router.navigateByUrl('/home/sign-in')
          }, 100)
        }
      })
  }}
