import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {UserService} from './user.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private userService: UserService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.userService.isGuest()) {
      return true;
    } else {
      this.router.navigate(['/login'], {
        queryParams: {
          return: state.url
        }
      });
      return false;
    }
  }

}
