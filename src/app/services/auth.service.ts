import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../models/user.model';
import { NotificationService } from './notification.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = environment.apiUrl;
  name: string = '';
  userId: string = '';
  isLoggedIn: boolean = false;

  constructor(
    private http: HttpClient,
    private readonly notificationService: NotificationService
  ) {}

  login(credentials: IUser): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/authenticate`, credentials).pipe(
      catchError((error) => {
        console.error('An Error occured:', error);
        return throwError(error);
      })
    );
  }

  signUp(user: any) {
    return this.http.post<any>(`${this.apiUrl}/users`, user).pipe(
      catchError((error) => {
        console.error('An Error occured:', error);
        return throwError(error);
      })
    );
  }

  logOut() {
    localStorage.removeItem('token');
    this.isLoggedIn = false;
    this.name = '';
    this.notificationService.showSnackBar('Logout successful!!');
  }
}
