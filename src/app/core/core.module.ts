import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';

import { RouterModule } from '@angular/router';
import { RootStoreModule } from './store';
import {StoreModule} from "@ngrx/store";
import {userReducer} from "./store/user/user.reducer";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {EffectsModule} from "@ngrx/effects";
import {UserEffects} from "./store/user/user.effects";
import {taskReducer} from "./store/task/task.reducer";
import {TaskEffects} from "./store/task/task.effects";

const exportedModules: Array<any> = [
  RootStoreModule
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forRoot({ user: userReducer, task: taskReducer }),
    EffectsModule.forRoot([UserEffects, TaskEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],
  providers: [
  ],
  exports: [
    ...exportedModules
  ]
})
export class CoreModule {
  constructor() {
  }
}
