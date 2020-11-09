import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../services/auth.service';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthloggedInGuard implements CanActivate {

  public userLoggedIn: boolean;
  constructor(private authService: AuthService,
              private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Observable<boolean>( obs => {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          return obs.next(true);
        } else {
          this.router.navigateByUrl('/login');
          return obs.next(false);
        }
      });
      this.authService.isLoggedIn();
    });
  }

}
