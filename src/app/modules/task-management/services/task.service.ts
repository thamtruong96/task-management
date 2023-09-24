import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromStore from '../../../core/store';
import {BehaviorSubject, Observable} from 'rxjs';
import {take} from 'rxjs/operators';
import {TaskActions, TaskSelectors, UserActions, UserSelectors} from "../../../core/store";
import {Task} from "../../../backend.service";


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  listTask$: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  constructor(
    private store: Store<fromStore.RootStoreState.State>,
    // private loaderService: LoaderService
  ) {
    this.init();
  }

  init() {
    this.store.dispatch(UserActions.loadUsers());
    this.getDataList();

  }

  public getUserList$(){
      return this.store.select(UserSelectors.selectUsers);
  }

  public getDataList() {
    // this.loaderService.show();
    this.store.dispatch(TaskActions.loadTasks());
  }

  public addTask(description, callbackSuccess, callbackError) {
    const task = {description: description} as Task;
    this.store.dispatch(TaskActions.addTask({task}));
    this.store.select(TaskActions.addTasksFailure).pipe(take(1)).subscribe((error) => {
      if (error) {
        callbackError && callbackError(error)
      }
    });
    this.store.select(TaskActions.addTasksSuccess).pipe(take(1)).subscribe((msg) => {
      if (msg) {
        callbackSuccess && callbackSuccess();
        this.getDataList();
      }
    });
  }

  public editTask(task, callbackSuccess, callbackError) {
    this.store.dispatch(TaskActions.updateTask({taskId: task.id, task}));
    this.store.select(TaskActions.updateTasksFailure).pipe(take(1)).subscribe((error) => {
      if (error) {
        callbackError && callbackError(error)
      }
    });
    this.store.select(TaskActions.updateTasksSuccess).pipe(take(1)).subscribe((msg) => {
      if (msg) {
        callbackSuccess && callbackSuccess();
        this.getDataList();
      }
    });
  }

  public closeTask(task_id, callbackSuccess, callbackError) {
    this.store.dispatch(TaskActions.completeTask({taskId: task_id}));
    this.store.select(TaskActions.completeTasksFailure).pipe(take(1)).subscribe((error) => {
      if (error) {
        callbackError && callbackError(error)
      }
    });
    this.store.select(TaskActions.completeTasksSuccess).pipe(take(1)).subscribe((msg) => {
      if (msg) {
        callbackSuccess && callbackSuccess();
        this.getDataList();
      }
    });
  }
  public assignTask(user_id, task_id, callbackSuccess, callbackError) {
    this.store.dispatch(TaskActions.assignUserToTask({taskId: task_id,userId: user_id }));
    this.store.select(TaskActions.assignTasksFailure).pipe(take(1)).subscribe((error) => {
      if (error) {
        callbackError && callbackError(error)
      }
    });
    this.store.select(TaskActions.assignTasksSuccess).pipe(take(1)).subscribe((msg) => {
      if (msg) {
        callbackSuccess && callbackSuccess();
        this.getDataList();
      }
    });
  }
  public getCurrentTableList$(): Observable<Array<any>> {
    return this.store.select(TaskSelectors.selectTasks);
  }

  public getTaskById(taskId) {
    this.store.dispatch(TaskActions.loadTaskById({ taskId: taskId }));
  }

  public getTaskById$(): Observable<any> {
    return this.store.select(TaskSelectors.selectTask);
  }
}
