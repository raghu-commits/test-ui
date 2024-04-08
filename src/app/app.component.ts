import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  newTask: string = '';
  isloggedIn: boolean = false;
  tasks: any[] = [
    {
      id: 1,
      description: 'Go for a walk',
      isCompleted: false,
      isEdit: false,
    },
    {
      id: 2,
      description: 'Buy groceries',
      isCompleted: false,
      isEdit: false,
    },
    {
      id: 3,
      description: 'Pay electricity bill',
      isCompleted: false,
      isEdit: false,
    },
  ];

  updateTask(task: any) {
    alert(task.description);
    alert(task.isCompleted);
  }
  removeTask(task: any) {
    alert(task.description);
  }
}
