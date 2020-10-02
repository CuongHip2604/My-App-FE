import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { DrawerComponent } from './drawer/drawer.component';
import { BarComponent } from './bar/bar.component';
import { ViewComponent } from './view/view.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { IconsProviderModule } from '../icons-provider.module';
import { PagesModule } from '../pages/pages.module';



@NgModule({
  declarations: [
    DrawerComponent,
    BarComponent,
    ViewComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    PagesModule,
  ],
  exports: [
    DrawerComponent,
    BarComponent,
    ViewComponent,
  ]
})
export class CoreModule { }
