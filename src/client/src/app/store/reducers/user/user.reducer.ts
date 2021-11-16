import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../../../../../../shared/models/user.model';
import { signInSuccess } from '../../actions/user/sign-in.action';


export const userFeatureKey = 'user';

export interface State {
  loggedIn: User | null
}

export const initialState: State = {
  loggedIn: null
}; 


export const reducer = createReducer(
  initialState,

  on(signInSuccess, (state, action) => {
    return {...state, loggedIn: action.data}
  })

);

