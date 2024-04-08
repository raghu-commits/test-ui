import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  signInForm = new FormGroup({});
  signUpForm = new FormGroup({});
  showSignIn: boolean = true;

  constructor() {}

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
    });

    this.signUpForm = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
    });
  }

  onSignIn() {
    console.log(this.signInForm.value);
  }

  onSignUp() {
    console.log(this.signUpForm.value);
  }
}
