import { Component, OnInit, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { login } from 'src/app/shared/auth/auth.actions';
import { Auth, DataLogin } from 'src/app/shared/auth/auth.model';
import { AuthState } from 'src/app/shared/auth/auth.reducer';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private store: Store<AuthState>, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [null, [Validators.required, Validators.minLength(3)]],
      password: [null, [Validators.required, Validators.minLength(6)]],
    });
  }

  submitForm(): void {
    const controls = this.loginForm.controls;

    // check login form
    if (this.loginForm.invalid) {
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched()
      );
      return;
    }
    // get data form login
    const data = {
      username: controls['username'].value,
      password: controls['password'].value
    };

    this.authService.login$(data).subscribe((rs: any) => {
      if (rs.statusCode === 200) {
        this.store.dispatch(new login({authToken: rs.data.token}));
      } else {

      }
    });
  }

}
