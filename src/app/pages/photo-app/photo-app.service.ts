import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PhotoApp } from 'src/app/shared/photo-app/photo-app.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhotoAppService {
  BASE_URL = environment.base_url;
  token = localStorage.getItem(environment.authTokenKey);
  config = {
    headers: {
      'Authorization': ` Bearer ${this.token}`
    }
  }
  constructor(private http: HttpClient) { }

  getPhtos$() {
    const url = `${this.BASE_URL}/photo-app`;
    return this.http.get<PhotoApp[]>(url, this.config);
  }

  addNew$(data: PhotoApp) {
    const url = `${this.BASE_URL}/photo-app/add-new`;
    return this.http.post<PhotoApp>(url, data, this.config);
  }
}
