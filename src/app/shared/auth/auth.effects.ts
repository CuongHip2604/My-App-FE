import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { mergeMap, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthActionTypes, login, logout } from './auth.actions';
import { AuthService } from './auth.service';



@Injectable()
export class AuthEffects {
  @Effect({ dispatch: false })
  login$ = this.actions$.pipe(
    ofType<login>(AuthActionTypes.LOGIN),
    tap(action => {
      localStorage.setItem(environment.authTokenKey, action.payload.authToken);
      this.router.navigate(['/']);
    })
  );

  @Effect({ dispatch: false })
    logout$ = this.actions$.pipe(
        ofType<logout>(AuthActionTypes.LOGOUT),
        tap(() => {
            localStorage.removeItem(environment.authTokenKey);
            this.router.navigate(['/photo-app'], { queryParams: { returnUrl: this.returnUrl } });
        })
    );

    private returnUrl: string;
  constructor(private actions$: Actions, private authService: AuthService, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
          this.returnUrl = event.url;
      }
    });
  }

}
