import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromUser from './user/user.reducer';
import * as fromGame from './game/game.reducer';


export interface AppState {

  [fromUser.userFeatureKey]: fromUser.UserState;
  [fromGame.gameFeatureKey]: fromGame.GameState;
}

export const reducers: ActionReducerMap<AppState> = {

  [fromUser.userFeatureKey]: fromUser.reducer,
  [fromGame.gameFeatureKey]: fromGame.reducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
