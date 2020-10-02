import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthState } from '../auth/auth.reducer';
import { isLoggedIn } from '../auth/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<AuthState>, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>  {
      return this.store.pipe(
        select(isLoggedIn),
        tap(loggedIn => {
            if (!loggedIn) {
                this.router.navigateByUrl('/login');
            }
        })
      );
    }

}
export class LoginGuard implements CanActivate {
  constructor(private store: Store<AuthState>, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>  {
      return this.store.pipe(
        select(isLoggedIn),
        tap(loggedIn => {
            if (loggedIn) {
                return false;
            }
        })
      );
    }

}
