import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoAppComponent } from './todo-app/todo-app.component';



const routesPage: Routes = [
  { path: 'todo-app', component: TodoAppComponent },
  { path: 'photo-app', loadChildren: () => import('./photo-app/photo-app.module').then(m => m.PhotoAppModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routesPage)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
