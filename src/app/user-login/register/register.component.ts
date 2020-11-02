import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('', Validators.email),
    address: new FormControl(''),
    password: new FormControl(''),
    password2: new FormControl('')
  });

  hide = true;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    console.log(this.registerForm.get('firstName').value);
    console.log(this.registerForm.get('lastName').value);
    console.log(this.registerForm.get('email').value);
    console.log(this.registerForm.get('address').value);
    console.log(this.registerForm.get('password').value);
    console.log(this.registerForm.get('password').value);
  }

}
