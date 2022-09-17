import { Action, createReducer, on } from '@ngrx/store';
import { Player } from '../../../../../shared/models/player.model';
import { Result } from '../../../../../shared/models/result.model';
import { setActivePlayer, setGamePin, setGamePlayers, setIsStarted, setPlayerReady, setResult } from './game.actions';


export const gameFeatureKey = 'game';

export interface GameState {
  activePlayerUsername: string | null
  pLeft: Player | null
  pRight: Player | null
  gamePin: string | null
  isStarted: boolean
  result: Result | null
}

export const initialState: GameState = {
  activePlayerUsername: null,
  pLeft: null,
  pRight: null,
  gamePin: null,
  isStarted: false,
  result: null,
};


export const reducer = createReducer(
  initialState,

  on(setActivePlayer, (state, action) => {
    return {...state, activePlayerUsername: action.activePlayerUsername}
  }),
  on(setGamePlayers, (state, action) => {
    return {...state, ...action}
  }),
  on(setGamePin, (state, action) => {
    return {...state, gamePin: action.gamePin}
  }),
  on(setIsStarted, (state, action) => {
    return {...state, isStarted: action.isStarted}
  }),
  on(setPlayerReady, (state, action) => {
    let tempState = {...state}
    if (action.player === 'pLeft') {
      tempState.pLeft!.ready = true
    } else {
      tempState.pRight!.ready = true
    }
    return {...state, ...tempState}
  }),
  on(setResult, (state, action) => {
    return {...state, result: action.result}
  })
)

