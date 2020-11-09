import {Component, OnDestroy, OnInit} from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import {environment} from '../environments/environment';
import {AuthService} from './shared/services/auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{

  public userLoggedIn: boolean;
  private subscription: Subscription;
  constructor(private authService: AuthService) {
    firebase.initializeApp(environment.firebaseConfig);
  }

  ngOnInit(): void {
    this.subscription = this.authService.getLoggedIn().subscribe(value => {
      this.userLoggedIn = value;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription){
      this.subscription.unsubscribe();
    }
  }
}
