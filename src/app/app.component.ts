import { environment } from './../environments/environment';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from './shared/auth/auth.reducer';
import { login } from './shared/auth/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private store: Store<AuthState>) {}

  ngOnInit() {
    const getToken = localStorage.getItem(environment.authTokenKey);
    if (getToken) {
      this.store.dispatch(new login({authToken: getToken}));
    }
  }
}
