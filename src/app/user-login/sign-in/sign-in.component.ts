import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  hide = true;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.loginForm.get('email').value);
    console.log(this.loginForm.get('password').value);
  }

}
