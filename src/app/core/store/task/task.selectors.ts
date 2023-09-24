import { createSelector } from '@ngrx/store';
import { TaskState } from './task.reducer';

export const selectTaskState = (state: { task: TaskState }) => state.task;

export const selectTasks = createSelector(
    selectTaskState,
    (state) => state.tasks
);

export const selectLoading = createSelector(
    selectTaskState,
    (state) => state.loading
);

export const selectError = createSelector(
    selectTaskState,
    (state) => state.error
);

export const selectTask = createSelector(
    selectTaskState,
    (state) => state.task
);
