import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthServiceTsService } from 'src/app/services/auth.service.ts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private loginAuth: AuthServiceTsService,
    private router: Router
  ) {}
  ngOninit(): void {}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    pwd: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16),
    ]),
  });
  isUserValid: boolean = false;
  loginSubmitted() {
    this.loginAuth
      .loginUser([this.loginForm.value.email, this.loginForm.value.pwd])
      .subscribe((res) => {
        if (res == 'Failure') {
          this.isUserValid = false;
          alert('Login Failed');
        } else {
          this.isUserValid = true;
          this.loginAuth.setToken(res);
          this.router.navigateByUrl('vehiclebranding');
        }
      });
  }

  get Email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }
  get PWD(): FormControl {
    return this.loginForm.get('pwd') as FormControl;
  }
}
