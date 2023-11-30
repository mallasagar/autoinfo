import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class userauthGuard implements CanActivate {
  constructor(private authService: AuthenticationService, private router: Router) {}
status:boolean=false;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    const isuserAuthenticated = this.authService.userrole.getValue();
    // Assuming role is a BehaviorSubject<boolean>
    this.status=Boolean(localStorage.getItem('isloggedin')&&(localStorage.getItem('userrole')==='user'))
    if(isuserAuthenticated||this.status) {
      return true;
    } else {
      // Redirect to the login page or another route
      this.router.navigate(['/login']);
      return false;
    }
  }
}