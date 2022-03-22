import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';
import { AppState } from '../../../../../store';
import { UserState } from '../../../../../store/reducers/user/user.reducer';
import { testSelector } from '../../../../../store/selectors/user/user.selectors';

@Injectable({
  providedIn: 'root'
})
export class GameInfoResolver implements Resolve<UserState> {
  constructor(private store: Store<AppState>) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserState> {
    return this.store.select(testSelector).pipe(take(1));
  }
}
