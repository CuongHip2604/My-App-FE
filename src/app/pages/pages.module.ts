import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { PhotoAppComponent } from './photo-app/photo-app.component';
import { PhotoAppModule } from './photo-app/photo-app.module';



@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    PhotoAppModule
  ],
  declarations: [WelcomeComponent, PhotoAppComponent],
  exports: [WelcomeComponent, PhotoAppComponent]
})
export class PagesModule { }
