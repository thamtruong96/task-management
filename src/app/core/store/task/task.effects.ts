import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

import * as TaskActions from './task.actions';
import { BackendService } from '../../../backend.service';

@Injectable()
export class TaskEffects {
    constructor(private actions$: Actions, private taskService: BackendService) {}

    loadTasks$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TaskActions.loadTasks),
            mergeMap(() =>
                this.taskService.tasks().pipe(
                    map((tasks) => TaskActions.loadTasksSuccess({ tasks })),
                    catchError((error) => of(TaskActions.loadTasksFailure({ error })))
                )
            )
        )
    );

    addTask$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TaskActions.addTask),
            mergeMap(({ task }) =>
                this.taskService.newTask({description: task.description}).pipe(
                    map(() => TaskActions.addTasksSuccess({ msg: "Success" })),
                    catchError((error) => of(TaskActions.addTasksFailure({ error })))
                )
            )
        )
    );

    updateTask$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TaskActions.updateTask),
            mergeMap(({taskId, task }) =>
                this.taskService.update(taskId, task).pipe(
                    map(() => TaskActions.loadTasks()),
                    catchError((error) => of(TaskActions.loadTasksFailure({ error })))
                )
            )
        )
    );

    assignUserToTask$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TaskActions.assignUserToTask),
            mergeMap(({ taskId, userId }) =>
                this.taskService.assign(taskId, userId).pipe(
                    map(() => TaskActions.assignTasksSuccess({msg: "Success"})), 
                    catchError((error) => of(TaskActions.assignTasksFailure({ error })))
                )
            )
        )
    );

    completeTask$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TaskActions.completeTask),
            mergeMap(({ taskId }) =>
                this.taskService.complete(taskId, true).pipe(
                    map(() => TaskActions.completeTasksSuccess({msg: "Success"})),
                    catchError((error) => of(TaskActions.completeTasksFailure({ error })))
                )
            )
        )
    );

    loadTaskById$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TaskActions.loadTaskById),
            switchMap(action =>
                this.taskService.task(action.taskId).pipe(
                    map(task => TaskActions.loadTaskByIdSuccess({ task })),
                    catchError(error => of(TaskActions.loadTaskByIdFailure({ error })))
                )
            )
        )
    );
}
