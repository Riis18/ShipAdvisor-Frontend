import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private loginService: UserService) { }

  ngOnInit(): void {
  }

  signOut() {
    this.loginService.signOut();
  }

}
