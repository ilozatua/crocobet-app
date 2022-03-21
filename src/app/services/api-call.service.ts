import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { delay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiCallService {
  constructor(private http: HttpClient) {}

  // This call gets all users from API
  getAllUsers(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/users`).pipe(delay(200));
  }

  // This call gets user by id from API
  getUser(id: number): Observable<any> {
    return this.http.get(`${environment.baseUrl}/users/${id}`);
  }

  // This call gets posts by user from API
  getPosts(id: number): Observable<any> {
    return this.http.get(`${environment.baseUrl}/users/${id}/posts`);
  }
}
