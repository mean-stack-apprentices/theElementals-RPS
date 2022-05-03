import { createAction, props } from '@ngrx/store';
import { Player } from '../../../../../shared/models/player.model';

export const setGamePlayers = createAction(
  '[Game] Set Game Players',
  props<{ pLeft:Player, pRight:Player }>()
);

export const setGamePin = createAction(
  '[Game] Set Game Pin',
  props<{ gamePin: string }>()
)

export const setActivePlayer = createAction(
  '[Game] Set Active Player',
  props<{ activePlayerUsername: string }>()
)

export const setPlayerReady = createAction(
  '[Game] Set Player Ready',
  props<{ player: string }>()
)

export const setIsStarted = createAction(
  '[Game] Set isStarted',
  props<{ isStarted: boolean }>()
)
