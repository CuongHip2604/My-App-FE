import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { DataRegister } from 'src/app/shared/auth/auth.model';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  private returnUrl: string;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
          this.returnUrl = event.url;
      }
    });
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      passwordConfirm: [null, [Validators.required, Validators.minLength(6)]],
    });
  }

  get checkValidForm() {
    const controls = this.registerForm.controls;
    if (!controls['username'].value || !controls['email'].value || !controls['password'].value || !controls['passwordConfirm'].value) {
      return true;
    }
    return false;
  }

  submitForm() {
    const controls = this.registerForm.controls;

    // check register form
    if (this.registerForm.invalid) {
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched()
      );
      return;
    }
    // get data form register
    const data: DataRegister = {
      username: controls['username'].value,
      email: controls['email'].value,
      password: controls['password'].value,
      passwordConfirm: controls['passwordConfirm'].value,
    };

    this.authService.register$(data).subscribe((rs: any) => {
      if (rs.statusCode === 200) {
        this.router.navigate(['/login'], { queryParams: { returnUrl: this.returnUrl } });
      } else {

      }
    });
  }

}
