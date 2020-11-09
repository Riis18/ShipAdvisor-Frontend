import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../shared/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    phoneNumber: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.minLength(8), Validators.required]),
    password2: new FormControl('', [Validators.minLength(8), Validators.required])
  });

  hide = true;
  get firstName(): any { return this.registerForm.get('firstName'); }
  get lastName(): any { return this.registerForm.get('lastName'); }
  get email(): any { return this.registerForm.get('email'); }
  get phoneNumber(): any { return this.registerForm.get('phoneNumber'); }
  get address(): any { return this.registerForm.get('address'); }
  get password(): any { return this.registerForm.get('password'); }
  get password2(): any { return this.registerForm.get('password2'); }

  checkValidate(): boolean {
    if (this.firstName.invalid || this.lastName.invalid || this.address.invalid || this.email.invalid ||
      this.phoneNumber.invalid || this.password.value !== this.password2.value || this.password.invalid || this.password2.invalid) {
      return true;
    } else {
      return false;
    }
  }

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  async onSubmit() {
    let customer;
    customer = this.registerForm.value;
    await this.loginService.createUserFB(customer);
  }

}
