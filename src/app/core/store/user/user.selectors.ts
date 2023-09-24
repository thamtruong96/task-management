import { createSelector } from '@ngrx/store';
import { UserState } from './user.reducer';

export const selectUserState = (state: { user: UserState }) => state.user;

export const selectUsers = createSelector(
    selectUserState,
    (state) => state.users
);

export const selectLoading = createSelector(
    selectUserState,
    (state) => state.loading
);

export const selectError = createSelector(
    selectUserState,
    (state) => state.error
);
