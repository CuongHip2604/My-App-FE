import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { PhotoAppComponent } from './photo-app/photo-app.component';
import { PhotoAppModule } from './photo-app/photo-app.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCardModule } from 'ng-zorro-antd/card';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { StoreModule } from '@ngrx/store';
import * as fromTodoApp from '../shared/todo-app/todo-app.reducer';
import * as fromPhotoApp from '../shared/photo-app/photo-app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodoAppEffects } from '../shared/todo-app/todo-app.effects';
import { PhotoAppEffects } from '../shared/photo-app/photo-app.effects';
import { HttpClientModule } from '@angular/common/http';
import { NzModalModule } from 'ng-zorro-antd/modal';
import * as fromAuth from '../shared/auth/auth.reducer';
import { AuthEffects } from '../shared/auth/auth.effects';



@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    PhotoAppModule,
    FormsModule,
    NzCardModule,
    NzInputModule,
    NzSwitchModule,
    NzIconModule,
    NzButtonModule,
    NzModalModule,
    HttpClientModule,
    StoreModule.forFeature(fromTodoApp.todoAppsFeatureKey, fromTodoApp.reducer),
    StoreModule.forFeature(fromPhotoApp.photoAppsFeatureKey, fromPhotoApp.reducer),
    EffectsModule.forFeature([TodoAppEffects, PhotoAppEffects, AuthEffects]),
    StoreModule.forFeature(fromAuth.authsFeatureKey, fromAuth.authReducer)
  ],
  declarations: [TodoAppComponent, PhotoAppComponent],
  exports: [TodoAppComponent, PhotoAppComponent]
})
export class PagesModule { }
