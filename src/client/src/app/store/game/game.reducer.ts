import { Action, createReducer, on } from '@ngrx/store';
import { Player } from '../../../../../shared/models/player.model';
import { setActivePlayer, setGamePin, setGamePlayers, setIsStarted, setPlayerReady } from './game.actions';


export const gameFeatureKey = 'game';

export interface GameState {
  activePlayerUsername: string | null
  pLeft: Player | null
  pRight: Player | null
  gamePin: string | null
  vsComputer: boolean
  isStarted: boolean
}

export const initialState: GameState = {
  activePlayerUsername: null,
  pLeft: null,
  pRight: null,
  gamePin: null,
  vsComputer: true,
  isStarted: false,
};


export const reducer = createReducer(
  initialState,

  on(setGamePlayers, (state, action) => {
    return {...state, vsComputer: false, ...action}
  }),
  on(setGamePin, (state, action) => {
    return {...state, gamePin: action.gamePin}
  }),
  on(setActivePlayer, (state, action) => {
    return {...state, activePlayerUsername: action.activePlayerUsername}
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
)

