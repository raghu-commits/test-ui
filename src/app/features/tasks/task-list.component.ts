import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITask } from 'src/app/models/task.model';
import { AuthService } from 'src/app/services/auth.service';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
})
export class TaskListComponent implements OnInit, OnDestroy {
  tasks: ITask[] = [];
  description: string = '';
  private subscriptions: Subscription[] = [];

  constructor(
    public authService: AuthService,
    private tasksService: TasksService
  ) {}

  addTask() {
    const task = {
      description: this.description,
    };
    this.subscriptions.push(
      this.tasksService.addTask(task).subscribe((response) => {
        this.getTasks();
        this.description = '';
        console.log(response);
      })
    );
  }

  updateTask(task: any, toggleIsComplete = false) {
    if (toggleIsComplete) task.isCompleted = !task.isCompleted;
    this.subscriptions.push(
      this.tasksService.updateTask(task).subscribe((response) => {
        this.getTasks();
        console.log(response);
      })
    );
  }

  removeTask(task: any) {
    this.subscriptions.push(
      this.tasksService.deleteTask(task.id).subscribe((response) => {
        this.getTasks();
        console.log(response);
      })
    );
  }

  getCreatedBy(task: ITask) {
    return `${task.user?.firstName} ${task.user?.lastName}`;
  }
  ngOnInit(): void {
    this.subscriptions.push(
      this.authService.getAllTasks$.subscribe((isLoggedOut) => {
        if (isLoggedOut) this.getTasks();
      })
    );
    this.getTasks();
  }

  private getTasks() {
    if (this.authService.isLoggedIn) {
      this.subscriptions.push(
        this.tasksService.getTasksByUserId().subscribe((tasks) => {
          this.tasks = tasks.sort((a, b) => a.id - b.id);
        })
      );
    } else {
      this.subscriptions.push(
        this.tasksService.getTasks().subscribe((tasks) => {
          this.tasks = tasks.sort((a, b) => a.id - b.id);
        })
      );
    }
  }

  ngOnDestroy() {
    if (this.subscriptions.length)
      this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
