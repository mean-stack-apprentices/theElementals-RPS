import { Action, createReducer, on } from '@ngrx/store';
import { Player } from '../../../../../shared/models/player.model';
import { setGamePlayers } from './game.actions';


export const gameFeatureKey = 'game';

export interface GameState {
  pLeft: Player | null
  pRight: Player | null
  gamePin: string | null
}

export const initialState: GameState = {
  pLeft: null,
  pRight: null,
  gamePin: null
};


export const reducer = createReducer(
  initialState,

  on(setGamePlayers, (state, action) => {
    return {...state, ...action}
  }),
)

