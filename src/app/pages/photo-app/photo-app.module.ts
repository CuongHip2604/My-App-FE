import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoAppRoutingModule } from './photo-app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { PhotoAddComponent } from './photo-add/photo-add.component';
import { PhotoEditComponent } from './photo-edit/photo-edit.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [PhotoListComponent, PhotoAddComponent, PhotoEditComponent, BannerComponent, FooterComponent],
  imports: [
    CommonModule,
    PhotoAppRoutingModule,
    NzCarouselModule,
    NzButtonModule,
    NzFormModule,
    FormsModule,
    NzInputModule,
    NzSelectModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [PhotoListComponent, PhotoAddComponent, BannerComponent, PhotoEditComponent, FooterComponent]
})
export class PhotoAppModule { }
