import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PhotoAppComponent } from './photo-app/photo-app.component';
import { PhotoListComponent } from './photo-app/photo-list/photo-list.component';



const routesPage: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'photo-app', loadChildren: () => import('./photo-app/photo-app.module').then(m => m.PhotoAppModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routesPage)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
