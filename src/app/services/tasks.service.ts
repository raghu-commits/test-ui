import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ITask } from '../models/task.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient, private authService: AuthService) {}

  getTasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>(`${this.apiUrl}/tasks`);
  }

  getTasksByUserId(): Observable<ITask[]> {
    const userId = this.authService.userId;
    return this.http.get<ITask[]>(`${this.apiUrl}/tasks/${userId}`);
  }

  addTask(task: { description: string }): Observable<ITask> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().append(
      'Authorization',
      `Bearer ${token}`
    );
    return this.http.post<ITask>(`${this.apiUrl}/tasks`, task, { headers });
  }

  updateTask(task: ITask): Observable<ITask> {
    return this.http.patch<ITask>(`${this.apiUrl}/tasks/${task.id}`, task);
  }

  deleteTask(taskId: ITask): Observable<ITask> {
    return this.http.delete<ITask>(`${this.apiUrl}/tasks/${taskId}`);
  }
}
