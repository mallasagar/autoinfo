import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class authGuard implements CanActivate {
  status:boolean=false;
  constructor(private authService: AuthenticationService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    const isadminAuthenticated = this.authService.adminrole.getValue(); // Assuming role is a BehaviorSubject<boolean>
    this.status=Boolean(localStorage.getItem('isloggedin')&&(localStorage.getItem('userrole')==='admin'))
    if (isadminAuthenticated||this.status) {
      return true;
    } else {
      // Redirect to the login page or another route
      this.router.navigate(['/login']);
      return false;
    }
  }
}
