import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTaskComponent } from './new-task.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NewTaskComponent],
  imports: [CommonModule, FormsModule],
  exports: [NewTaskComponent],
})
export class NewTaskModule {}
