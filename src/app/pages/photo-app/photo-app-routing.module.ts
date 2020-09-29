import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoAppComponent } from './photo-app.component';
import { PhotoEditComponent } from './photo-edit/photo-edit.component';
import { PhotoAddComponent } from './photo-add/photo-add.component';


const routesPhotoApp: Routes = [
  { path: '', component: PhotoAppComponent,
    children: [
      { path: '', component: PhotoListComponent },
      { path: 'add', component: PhotoAddComponent },
      { path: 'edit/:id', component: PhotoEditComponent },
    ]
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routesPhotoApp)
  ],
  exports: [RouterModule]
})
export class PhotoAppRoutingModule { }
