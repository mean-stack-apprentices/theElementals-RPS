import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as gameFeature from 'src/app/store/game/game.reducer'
import { AppState } from '..';

const gameFeatureSelector = (state: AppState) => state.game

export const gameStateSelector = createSelector(
    gameFeatureSelector,
    (state) => state
);