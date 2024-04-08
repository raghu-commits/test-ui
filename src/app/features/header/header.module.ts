import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatIconModule } from '@angular/material/icon';
import { SignInModule } from '../sign-in/sign-in.module';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, MatIconModule, SignInModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
