import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskListComponent } from './task-list.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [TaskListComponent],
  imports: [CommonModule, FormsModule, MatListModule, MatIconModule],
  exports: [TaskListComponent],
})
export class TaskListModule {}
