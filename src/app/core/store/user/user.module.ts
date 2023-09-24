import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

import { UserEffects } from './user.effects';

@NgModule({
    imports: [
        CommonModule,
        EffectsModule.forFeature([UserEffects])
    ]
})
export class UserModule { }
