import {RouterModule, Routes} from "@angular/router";
import {LayoutComponent} from "./modules/shared/layout/layout.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'TaskManagement',
                loadChildren: () => import('./modules/task-management/task-management.module').then((m) => m.TaskManagementModule),
            },
            {
                path: '',
                redirectTo: '/TaskManagement/Task', pathMatch: 'full'
            }
        ]
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
