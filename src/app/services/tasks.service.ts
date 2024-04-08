import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ITask } from '../models/task.model';
import { AuthService } from './auth.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient, private authService: AuthService) {}

  getTasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>(`${this.apiUrl}/tasks`).pipe(
      catchError((error) => {
        console.error('An Error occured:', error);
        return throwError(error);
      })
    );
  }

  getTasksByUserId(): Observable<ITask[]> {
    const userId = this.authService.userId;
    return this.http.get<ITask[]>(`${this.apiUrl}/tasks/${userId}`).pipe(
      catchError((error) => {
        console.error('An Error occured:', error);
        return throwError(error);
      })
    );
  }

  addTask(task: { description: string }): Observable<ITask> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().append(
      'Authorization',
      `Bearer ${token}`
    );
    return this.http
      .post<ITask>(`${this.apiUrl}/tasks`, task, { headers })
      .pipe(
        catchError((error) => {
          console.error('An Error occured:', error);
          return throwError(error);
        })
      );
  }

  updateTask(task: ITask): Observable<ITask> {
    return this.http.patch<ITask>(`${this.apiUrl}/tasks/${task.id}`, task).pipe(
      catchError((error) => {
        console.error('An Error occured:', error);
        return throwError(error);
      })
    );
  }

  deleteTask(taskId: ITask): Observable<ITask> {
    return this.http.delete<ITask>(`${this.apiUrl}/tasks/${taskId}`).pipe(
      catchError((error) => {
        console.error('An Error occured:', error);
        return throwError(error);
      })
    );
  }
}
