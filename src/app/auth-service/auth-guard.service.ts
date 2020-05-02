import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private service: AuthService, private router: Router) {
  }

  canActivate(): boolean {
    const result = this.service.isLoggedIn();
    if (result) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
