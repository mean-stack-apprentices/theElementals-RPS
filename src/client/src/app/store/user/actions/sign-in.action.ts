import { createAction, props } from '@ngrx/store';
import { User } from '../../../../../../shared/models/user.model';

export const signIn = createAction(
  '[User] Sign In',
  props<User>()
);

export const signInSuccess = createAction(
  '[User] Sign In Success',
  props<{ data: User }>()
);

export const signInFailure = createAction(
  '[User] Sign In Failure',
  props<{ error: Error }>()
);
