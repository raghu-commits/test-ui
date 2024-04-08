import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(
    private readonly router: Router,
    public authService: AuthService
  ) {}

  navigateToLogin() {
    this.router.navigateByUrl('/signin');
  }

  logOut() {
    this.authService.logOut();
  }
}
