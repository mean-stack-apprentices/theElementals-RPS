import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '..';
import * as userFeature from 'src/app/store/user/user.reducer'

// export const userFeatureSelector = createFeatureSelector<AppState, userFeature.UserState>
// (userFeature.userFeatureKey);

export const userFeatureSelector = (state: AppState) => state.user;
 
export const loggedInSelector = createSelector(
    userFeatureSelector,
    (state) => state.loggedIn
);

export const userStateSelector = createSelector(
    userFeatureSelector,
    (state) => state
);