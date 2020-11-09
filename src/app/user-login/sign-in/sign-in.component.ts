import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../shared/services/login.service';
import {Router} from '@angular/router';
import firebase from 'firebase';
import {CustomerService} from '../../shared/services/customer.service';

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

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  async onSubmit() {
    await this.loginService.signIn(this.loginForm.get('email').value, this.loginForm.get('password').value);
  }

}
