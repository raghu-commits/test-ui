import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListModule } from '../features/tasks/task-list.module';
import { HeaderModule } from '../features/header/header.module';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, FormsModule, HeaderModule, TaskListModule],
  exports: [HomeComponent],
})
export class HomeModule {}
