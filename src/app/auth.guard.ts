import { Injectable }             from '@angular/core';
import { Router,
         ActivatedRouteSnapshot,
         RouterStateSnapshot }    from '@angular/router';
import { CanActivate }            from '@angular/router';
import { AuthService }                   from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.authService.authenticated()){
      if(this.authService.isOrganizer()){
        return true;
      } else {
        this.router.navigate(['unauthorized']);
        return false;
      }
    } else {
      // Save URL to redirect to after login and fetching profile to get roles
      /*localStorage.setItem('redirect_url', state.url);
      this.authService.login();
      this.router.navigate(['']);*/
      return false;
    }
  }
}
