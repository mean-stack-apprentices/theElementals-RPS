import { Action, createReducer, on } from '@ngrx/store';
import { Player } from '../../../../../shared/models/player.model';
import { User } from '../../../../../shared/models/user.model';
import { signInSuccess } from './actions/sign-in.action';


export const userFeatureKey = 'user';

export interface UserState {
  loggedIn: User | null
}

export const initialState: UserState = {
  loggedIn: null,
};


export const reducer = createReducer(
  initialState,

  on(signInSuccess, (state, action) => {
    localStorage.setItem('user', JSON.stringify(action.data))
    return {...state, loggedIn: action.data}
  })
);

