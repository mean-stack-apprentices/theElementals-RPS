import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../..';
import * as userFeature from 'src/app/store/reducers/user/user.reducer'

// export const userFeatureSelector = createFeatureSelector<AppState, userFeature.State>
// (userFeature.userFeatureKey);

export const userFeatureSelector = (state: AppState) => state.user;
 
export const loggedInSelector = createSelector(
    userFeatureSelector,
    (state) => state.loggedIn
);

