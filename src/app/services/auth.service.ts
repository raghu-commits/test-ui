import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = environment.apiUrl;
  name: string = '';
  userId: string = '';
  isLoggedIn: boolean = false;
  getAllTasks$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  login(credentials: IUser): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/authenticate`, credentials);
  }

  signUp(user: any) {
    return this.http.post<any>(`${this.apiUrl}/users`, user);
  }
  logOut() {
    localStorage.removeItem('token');
    this.isLoggedIn = false;
    this.name = '';
    this.getAllTasks$.next(true);
  }
}
