import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';
import { AppState } from '../../../store';
import { UserState } from '../../../store/user/user.reducer';
import { userStateSelector } from '../../../store/user/user.selectors';

@Injectable({
  providedIn: 'root'
})
export class UserStateResolver implements Resolve<UserState> {
  constructor(private store: Store<AppState>) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserState> {
    return this.store.select(userStateSelector).pipe(take(1));
  }
}
