import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceTsService } from 'src/app/services/auth.service.ts.service';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css'],
})
export class RegistrationformComponent {
  repeatPass: string = 'none';
  displayMsg: string = '';
  isAccountCreated: boolean = false;
  constructor(private authService: AuthServiceTsService) {}
  ngOninit(): void {}
  regesterForm = new FormGroup({
    firstname: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('[a-zA-Z].*'),
    ]),
    lastname: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('[a-zA-Z].*'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]*'),
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
    gender: new FormControl('', [Validators.required]),
    pwd: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16),
      Validators.pattern(''),
    ]),
    rpwd: new FormControl(''),
  });
  registerSubmitted() {
    if (this.PWD.value == this.RPWD.value) {
      console.log(this.regesterForm);
      this.repeatPass = 'none';
      this.authService
        .registerUser([
          this.regesterForm.value.firstname,
          this.regesterForm.value.lastname,
          this.regesterForm.value.email,
          this.regesterForm.value.mobile,
          this.regesterForm.value.gender,
          this.regesterForm.value.pwd,
        ])
        .subscribe((res) => {
          if (res == 'Success') {
            this.displayMsg = 'Account is created successfully';
            this.isAccountCreated = true;
          } else if (res == 'Already Exits') {
            this.displayMsg =
              'Account Already Exists. Please try another email';
            this.isAccountCreated = false;
          } else {
            this.displayMsg = 'Something went wrong';
            this.isAccountCreated = false;
          }
        });
    } else {
      this.repeatPass = 'inline';
    }
  }
  get FirstName(): FormControl {
    return this.regesterForm.get('firstname') as FormControl;
  }
  get LastName(): FormControl {
    return this.regesterForm.get('lastname') as FormControl;
  }
  get Email(): FormControl {
    return this.regesterForm.get('email') as FormControl;
  }
  get Mobile(): FormControl {
    return this.regesterForm.get('mobile') as FormControl;
  }
  get Gender(): FormControl {
    return this.regesterForm.get('gender') as FormControl;
  }
  get PWD(): FormControl {
    return this.regesterForm.get('pwd') as FormControl;
  }
  get RPWD(): FormControl {
    return this.regesterForm.get('rpwd') as FormControl;
  }
}
