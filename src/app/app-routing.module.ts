import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SignInComponent} from './user-login/sign-in/sign-in.component';
import {RegisterComponent} from './user-login/register/register.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'sign-up', component: SignInComponent },
  { path: '', component: SignInComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
