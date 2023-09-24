import { NgModule } from '@angular/core';
import {TaskManagementRouting} from "./task-management.routing";
import {TaskManagementPageComponent} from "./containers/task-management-page/task-management-page.component";
import {TaskListComponent} from "./components/task-list/task-list.component";
import {MatCardModule} from "@angular/material/card";
import {TaskStatsComponent} from "./components/task-stats/task-stats.component";
import {MatIconModule} from "@angular/material/icon";
import {MatTabsModule} from "@angular/material/tabs";
import {MatInputModule} from "@angular/material/input";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatLegacyChipsModule} from "@angular/material/legacy-chips";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {NgForOf, NgIf} from "@angular/common";
import {TaskAddComponent} from "./components/task-add/task-add.component";
import {TaskService} from "./services/task.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AssignUserModalComponent } from './components/assign-user-modal/assign-user-modal.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatSelectModule} from "@angular/material/select";
@NgModule({
    imports: [
        TaskManagementRouting,
        ReactiveFormsModule,
        MatCardModule,
        MatIconModule,
        MatTabsModule,
        MatInputModule,
        MatPaginatorModule,
        MatLegacyChipsModule,
        MatTableModule,
        MatSortModule,
        MatButtonModule,
        MatTooltipModule,
        NgIf,
        MatDialogModule,
        FormsModule,
        MatSelectModule,
        NgForOf,
        MatSelectModule
    ],
    declarations: [
        TaskAddComponent,
        TaskStatsComponent,
        TaskListComponent,
        TaskManagementPageComponent,
        AssignUserModalComponent,
        ],
    providers: [
        TaskService,
    ],
})
export class TaskManagementModule {
}

