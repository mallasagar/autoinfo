import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, NavigationEnd } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerService } from '../services/customer.service';

@Injectable({
  providedIn: 'root',
})
export class customerguardGuard implements CanActivate {
  constructor(private customerservice:CustomerService, private route:Router, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    const customerstatus = this.customerservice.customerloggedin.getValue();
    const customerloggedin=Boolean((localStorage.getItem("userrole")==='customer')&&(localStorage.getItem("isloggedin")==='true'))
  
    
    if(customerstatus||customerloggedin) {
      return true;
    } else {
      // Redirect to the login page or another route
          this.router.navigate(['/home'])
          return false;
        }
      }
}