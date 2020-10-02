import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core/core.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard, LoginGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/todo-app' },
  {
    path: '',
    component: CoreComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', loadChildren: () => import('./core/core.module').then(m => m.CoreModule) },
    ]
},
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
