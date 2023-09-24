import { createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';
import { User } from '../../../backend.service';

export interface UserState {
  users: User[];
  loading: boolean;
  error: any;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

export const userReducer = createReducer(
    initialState,
    on(UserActions.loadUsers, (state) => ({ ...state, loading: true, error: null })),
    on(UserActions.loadUsersSuccess, (state, { users }) => ({ ...state, users, loading: false })),
    on(UserActions.loadUsersFailure, (state, { error }) => ({ ...state, error, loading: false }))
);
