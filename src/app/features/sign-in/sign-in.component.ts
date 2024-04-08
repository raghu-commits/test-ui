import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
})
export class SignInComponent implements OnInit, OnDestroy {
  signInForm = new FormGroup({});
  signUpForm = new FormGroup({});
  showSignIn: boolean = true;
  private subscription: Subscription | undefined;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
    });

    this.signUpForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      confirmPassword: new FormControl(null, Validators.required),
    });
  }

  onSignIn() {
    this.subscription = this.authService
      .login(this.signInForm.value)
      .subscribe((response: any) => {
        localStorage.setItem('token', response.access_token);
        this.authService.userId = response.userId;
        this.authService.name = response.name;
        this.authService.isLoggedIn = true;
        this.router.navigateByUrl('/home');
      });
  }

  onSignUp() {
    this.subscription = this.authService
      .signUp(this.signUpForm.value)
      .subscribe((response: any) => {
        this.showSignIn = true;
      });
  }

  goToHome() {
    this.router.navigateByUrl('/home');
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
