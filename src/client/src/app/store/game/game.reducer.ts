import { Action, createReducer, on } from '@ngrx/store';
import { Player } from '../../../../../shared/models/player.model';


export const gameFeatureKey = 'game';

export interface GameState {
  pLeft: Player | null
  pRight: Player | null
  pLeftName: string
  pRightName: string
  pLeftSocketId: string
  pRightSocketId: string
}

export const initialState: GameState = {
  pLeft: null,
  pRight: null,
  pLeftName: '',
  pRightName: '',
  pLeftSocketId: '',
  pRightSocketId: '',
};


export const reducer = createReducer(
  initialState,

);

