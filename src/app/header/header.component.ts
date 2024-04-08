import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignInComponent } from '../auth/sign-in/sign-in.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  isLoggedIn: boolean = false;

  ngOnInit(): void {}

  openSignInDialog() {
    const dialogRef = this.dialog.open(SignInComponent);
  }
}
