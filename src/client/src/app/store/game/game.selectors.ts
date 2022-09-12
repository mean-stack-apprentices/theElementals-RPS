import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as gameFeature from 'src/app/store/game/game.reducer'
import { AppState } from '..';

const gameFeatureSelector = (state: AppState) => state.game

export const gameStateSelector = createSelector(
    gameFeatureSelector,
    (state) => state
);
export const gamePinSelector = createSelector(
    gameFeatureSelector,
    (state) => state.gamePin
);
export const pLeftSelector = createSelector(
    gameFeatureSelector,
    (state) => state.pLeft
);
export const pRightSelector = createSelector(
    gameFeatureSelector,
    (state) => state.pRight
);