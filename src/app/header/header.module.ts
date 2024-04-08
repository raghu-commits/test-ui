import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatIconModule } from '@angular/material/icon';
import { SignInModule } from '../auth/sign-in/sign-in.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MatIconModule, SignInModule, MatDialogModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
