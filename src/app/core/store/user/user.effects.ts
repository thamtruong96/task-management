import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import * as UserActions from './user.actions';
import { BackendService } from '../../../backend.service';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: BackendService) {}

  loadUsers$ = createEffect(() =>
      this.actions$.pipe(
          ofType(UserActions.loadUsers),
          mergeMap(() =>
              this.userService.users().pipe(
                  map((users) => UserActions.loadUsersSuccess({ users })),
                  catchError((error) => of(UserActions.loadUsersFailure({ error })))
              )
          )
      )
  );
}
