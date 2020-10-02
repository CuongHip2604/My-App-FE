import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Auth, DataLogin, DataRegister } from './auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  BASE_URL = environment.base_url;
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  login$(data: DataLogin) {
    const url = `${this.BASE_URL}/login`;
    return this.http.post(url, data);
  }
  register$(data: DataRegister) {
    const url = `${this.BASE_URL}/register`;
    return this.http.post(url, data);
  }
}
