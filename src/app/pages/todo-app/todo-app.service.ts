import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/app/shared/todo-app/todo-app.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoAppService {
  BASE_URL = environment.base_url;
  token = localStorage.getItem(environment.authTokenKey);
  config = {
    headers: {
      'Authorization': ` Bearer ${this.token}`
    }
  }
  constructor(private http: HttpClient) { }

  getTasks$(): Observable<Task[]> {
    const url = `${this.BASE_URL}/todo-app`;
    return this.http.get<Task[]>(url, this.config);
  }

  getTaskById$(id: number): Observable<Task> {
    const url = `${this.BASE_URL}/todo-app/${id}`;
    return this.http.get<Task>(url, this.config);
  }

  addNew$(data: Task): Observable<Task> {
    const url = `${this.BASE_URL}/todo-app/add-new`;
    return this.http.post<Task>(url, data, this.config);
  }

  updateTask$(id: string | number, changes: Partial<Task>): Observable<Task> {
    const url = `${this.BASE_URL}/todo-app/update/${id}`;
    return this.http.put<Task>(url, changes, this.config);
  }

  deleteTask$(id: number): Observable<Task> {
    const url = `${this.BASE_URL}/todo-app/delete/${id}`;
    return this.http.delete<Task>(url, this.config);
  }
}
