import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITask } from 'src/app/models/task.model';
import { AuthService } from 'src/app/services/auth.service';
import { TasksService } from 'src/app/services/tasks.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
})
export class TaskListComponent implements OnInit, OnDestroy {
  tasks: ITask[] = [];
  description: string = '';
  private subscriptions: Subscription[] = [];

  constructor(
    public readonly authService: AuthService,
    private readonly tasksService: TasksService,
    private notificationService: NotificationService
  ) {}

  addTask() {
    const task = {
      description: this.description,
    };
    this.subscriptions.push(
      this.tasksService.addTask(task).subscribe(
        (response) => {
          this.notificationService.showSnackBar('Task added successfully!!');
          this.getTasks();
          this.description = '';
        },
        (error) => {
          this.notificationService.showSnackBar(
            'An error occured, check console for more details!!'
          );
          console.error('Error handler:', error);
        }
      )
    );
  }

  updateTask(task: any, toggleIsComplete = false) {
    if (toggleIsComplete) task.isCompleted = !task.isCompleted;
    this.subscriptions.push(
      this.tasksService.updateTask(task).subscribe(
        (response) => {
          this.getTasks();
          this.notificationService.showSnackBar('Task updated successfully!!');
        },
        (error) => {
          this.notificationService.showSnackBar(
            'An error occured, check console for more details!!'
          );
          console.error('Error handler:', error);
        }
      )
    );
  }

  removeTask(task: any) {
    this.subscriptions.push(
      this.tasksService.deleteTask(task.id).subscribe(
        (response) => {
          this.notificationService.showSnackBar('Task deleted successfully!!');
          this.getTasks();
        },
        (error) => {
          this.notificationService.showSnackBar(
            'An error occured, check console for more details!!'
          );
          console.error('Error handler:', error);
        }
      )
    );
  }

  getCreatedBy(task: ITask) {
    return `${task.user?.firstName} ${task.user?.lastName}`;
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.authService.getAllTasks$.subscribe(
        (isLoggedOut) => {
          if (isLoggedOut) this.getTasks();
        },
        (error) => {
          this.notificationService.showSnackBar(
            'An error occured, check console for more details!!'
          );
          console.error('Error handler:', error);
        }
      )
    );
    this.getTasks();
  }

  private getTasks() {
    if (this.authService.isLoggedIn) {
      this.subscriptions.push(
        this.tasksService.getTasksByUserId().subscribe(
          (tasks) => {
            if (tasks.length) {
              this.tasks = tasks.sort((a, b) => a.id - b.id);
            } else {
              this.notificationService.showSnackBar('No tasks found!!');
              this.tasks = [];
            }
          },
          (error) => {
            this.notificationService.showSnackBar(
              'An error occured, check console for more details!!'
            );
            console.error('Error handler:', error);
          }
        )
      );
    } else {
      this.subscriptions.push(
        this.tasksService.getTasks().subscribe(
          (tasks) => {
            if (tasks.length) {
              this.tasks = tasks.sort((a, b) => a.id - b.id);
            } else {
              this.notificationService.showSnackBar('No tasks found!!');
              this.tasks = [];
            }
          },
          (error) => {
            this.notificationService.showSnackBar(
              'An error occured, check console for more details!!'
            );
            console.error('Error handler:', error);
          }
        )
      );
    }
  }

  ngOnDestroy() {
    if (this.subscriptions.length)
      this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
