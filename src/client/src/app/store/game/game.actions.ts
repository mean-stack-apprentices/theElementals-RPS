import { createAction, props } from '@ngrx/store';
import { Player } from '../../../../../shared/models/player.model';
import { Result } from '../../../../../shared/models/result.model';


export const setActivePlayer = createAction(
  '[Game] Set Active Player',
  props<{ activePlayerUsername: string }>()
)
export const setGamePin = createAction(
  '[Game] Set Game Pin',
  props<{ gamePin: string }>()
)
export const setGamePlayers = createAction(
  '[Game] Set Game Players',
  props<{ pLeft:Player, pRight:Player }>()
)
export const setIsStarted = createAction(
  '[Game] Set isStarted',
  props<{ isStarted: boolean }>()
)
export const setPlayerReady = createAction(
  '[Game] Set Player Ready',
  props<{ player: string }>()
)
export const setResult = createAction(
  '[Game] Set Result',
  props<{ result: Result | null }>()
)
