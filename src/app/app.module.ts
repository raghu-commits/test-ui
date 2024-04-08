import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from './header/header.module';
import { NewTaskModule } from './tasks/new-task/new-task.module';
import { TaskListModule } from './tasks/task-list/task-list.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HeaderModule,
    NewTaskModule,
    TaskListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
