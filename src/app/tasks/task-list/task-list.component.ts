import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  constructor() {}

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

  updateTask(task: any) {}
  removeTask(task: any) {}

  ngOnInit(): void {}
}
