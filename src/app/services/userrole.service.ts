import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserroleService {
  currentRoute: string='';
  userinfo:any;
  private userDataSubject = new BehaviorSubject<boolean>(false);
  userData$ = this.userDataSubject.asObservable();

  setUserRole() {
    if(localStorage.getItem('userrole')==='admin'){
    this.userDataSubject.next(true);
  } else if(localStorage.getItem('userrole')==='user'){
    this.userDataSubject.next(false);
   }else{this.userDataSubject.next(false);}
  }

  resetuserrole(){
   this.userDataSubject.next(false);
  }
 
}
   
  // constructor(private route: Router) { }

  // checkcurrentroute(){
  //   this.route.events.subscribe((event) => {
  //     if (event instanceof NavigationEnd) {
  //       this.currentRoute = event.url;
  //       console.log('Current Route:', this.currentRoute);
  //     }
  //   })
  // }





