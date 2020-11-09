import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../shared/services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  signOut() {
    this.loginService.signOut();
  }

}
