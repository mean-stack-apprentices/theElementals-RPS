import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AppState } from 'src/app/store';
import { loggedInSelector } from 'src/app/store/user/user.selectors';
import { User } from '../../../../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  loggedInUser: User | null = null
  constructor(
    private store: Store<AppState>,
    private router: Router,
    ) {
    this.store.select(loggedInSelector).subscribe(data => this.loggedInUser = data)
   }

  ngOnInit(): void {
  }

  route(path: string) {
    this.router.navigate([path])
  }
  routeIfLoggedIn(path: string) {
    if (this.loggedInUser) {
      this.route(path)
    } else {
      alert('Please log in to continue')
      setTimeout(() => {
        this.router.navigateByUrl('/home/sign-in')
      }, 100)
    }
  }
}
