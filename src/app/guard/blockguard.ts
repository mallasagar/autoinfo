import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, NavigationEnd } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class blockGuard implements CanActivate {
  constructor(private authService: AuthenticationService, private route:Router, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    const status = Boolean(localStorage.getItem('isloggedin'))
    const userrole = localStorage.getItem('userrole')
    if(!status) {
      return true;
    } else {
      // Redirect to the login page or another route
            if(userrole==='admin'){
              this.router.navigate(['/admin']);
            }else if(userrole==='user'){
              this.router.navigate(['/user']);
            }else{
              this.router.navigate(['/'])
            }
          return false;
        }
      }
}