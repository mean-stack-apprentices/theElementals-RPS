import { createAction, props } from '@ngrx/store';

export const loadGames = createAction(
  '[Game] Load Games'
);

export const loadGamesSuccess = createAction(
  '[Game] Load Games Success',
  props<{ data: any }>()
);

export const loadGamesFailure = createAction(
  '[Game] Load Games Failure',
  props<{ error: any }>()
);
