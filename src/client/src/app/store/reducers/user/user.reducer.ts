import { Action, createReducer, on } from '@ngrx/store';
import { Player } from '../../../../../../shared/models/player.model';
import { User } from '../../../../../../shared/models/user.model';
import { signInSuccess } from '../../actions/user/sign-in.action';


export const userFeatureKey = 'user';

export interface UserState {
  loggedIn: User | null
  pLeft: Player | null
  pRight: Player | null
  pLeftName: string
  pRightName: string
  pLeftSocketId: string
  pRightSocketId: string
}

export const initialState: UserState = {
  loggedIn: null,
  pLeft: null,
  pRight: null,
  pLeftName: '',
  pRightName: '',
  pLeftSocketId: '',
  pRightSocketId: '',
};


export const reducer = createReducer(
  initialState,

  on(signInSuccess, (state, action) => {
    localStorage.setItem('user', JSON.stringify(action.data))
    return {...state, loggedIn: action.data}
  })
);

