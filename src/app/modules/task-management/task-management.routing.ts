import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TaskManagementPageComponent} from "./containers/task-management-page/task-management-page.component";
import {TaskAddComponent} from "./components/task-add/task-add.component";

const routes: Routes = [
    {
        path: 'Task',
        component: TaskManagementPageComponent,
    },
    {
        path: 'AddTask',
        component: TaskAddComponent,
    },
    {
        path: 'EditTask/:id',
        component: TaskAddComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TaskManagementRouting {
}
