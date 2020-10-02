import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from '../pages/pages-routing.module';
import { CoreComponent } from './core.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../pages/pages.module').then(m => m.PagesModule)
  },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), CommonModule, PagesRoutingModule],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
