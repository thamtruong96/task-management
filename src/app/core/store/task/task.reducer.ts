import { createReducer, on } from '@ngrx/store';
import * as TaskActions from './task.actions';
import { Task } from '../../../backend.service';

export interface TaskState {
  tasks: Task[];
  task: Task,
  loading: boolean;
  error: any;
}

const initialState: TaskState = {
  tasks: [],
  task: {} as Task,
  loading: false,
  error: null,
};

export const taskReducer = createReducer(
    initialState,
    on(TaskActions.loadTasks, (state) => ({ ...state, loading: true, error: null })),
    on(TaskActions.loadTasksSuccess, (state, { tasks }) => ({ ...state, tasks, loading: false })),
    on(TaskActions.loadTasksFailure, (state, { error }) => ({ ...state, error, loading: false })),
    on(TaskActions.addTask, (state, { task }) => ({ ...state, tasks: [...state.tasks, task] })),
    on(TaskActions.updateTask, (state, { task }) => ({
      ...state,
      tasks: state.tasks.map((t) => (t.id === task.id ? task : t)),
    })),
    on(TaskActions.assignUserToTask, (state, { taskId, userId }) => ({
      ...state,
      tasks: state.tasks.map((task) => (task.id === taskId ? { ...task, user_id: userId } : task)),
    })),
    on(TaskActions.completeTask, (state, { taskId }) => ({
      ...state,
      tasks: state.tasks.map((task) => (task.id === taskId ? { ...task, completed: true } : task)),
    })),
    on(TaskActions.loadTaskByIdSuccess, (state, { task }) => ({
        ...state,
        task,
        error: null,
    })),
    on(TaskActions.loadTaskByIdFailure, (state, { error }) => ({
        ...state,
        task: null,
        error,
    }))
);
