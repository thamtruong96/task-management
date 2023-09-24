import { createAction, props } from '@ngrx/store';
import { Task } from '../../../backend.service';

export const loadTasks = createAction('[Task] Load Tasks');
export const loadTasksSuccess = createAction('[Task] Load Tasks Success', props<{ tasks: Task[] }>());
export const loadTasksFailure = createAction('[Task] Load Tasks Failure', props<{ error: any }>());

export const addTask = createAction('[Task] Add Task', props<{ task: Task }>());
export const addTasksSuccess = createAction('[Task] Add Tasks Success', props<{ msg: String }>());
export const addTasksFailure = createAction('[Task] Add Tasks Failure', props<{ error: any }>());
export const updateTask = createAction('[Task] Update Task', props<{taskId: number, task: Task }>());
export const updateTasksSuccess = createAction('[Task] Update Task Success', props<{ msg: String }>());
export const updateTasksFailure = createAction('[Task] Update Task Failure', props<{ error: any }>());
export const assignUserToTask = createAction('[Task] Assign User To Task', props<{ taskId: number; userId: number }>());
export const assignTasksSuccess = createAction('[Task] Assign Task Success', props<{ msg: String }>());
export const assignTasksFailure = createAction('[Task] Assign Task Failure', props<{ error: any }>());
export const completeTask = createAction('[Task] Complete Task', props<{ taskId: number }>());
export const completeTasksSuccess = createAction('[Task] Complete Task Success', props<{ msg: String }>());
export const completeTasksFailure = createAction('[Task] Complete Task Failure', props<{ error: any }>());
export const loadTaskById = createAction('[Task] Load Task By ID', props<{ taskId: number }>());
export const loadTaskByIdSuccess = createAction('[Task] Load Task By ID Success', props<{ task: Task }>());
export const loadTaskByIdFailure = createAction('[Task] Load Task By ID Failure', props<{ error: any }>());
