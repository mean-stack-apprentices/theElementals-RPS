import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { signIn, signInFailure, signInSuccess } from './actions/sign-in.action';



@Injectable()
export class UserEffects {
  signIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(signIn),
      mergeMap((action) =>
        this.userService.signIn(action).pipe(
          map((data) => signInSuccess(data)),
          catchError((error) => of(signInFailure({ error })))
        )
      )
    )
  );


  constructor(
    private actions$: Actions,
    private userService: UserService,
    ) {}

}
