import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UrltrackerService {
  currentRoute: string='';
  constructor(private route: Router) { }

  checkcurrentroute(){
    this.route.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        console.log('Current Route:', this.currentRoute);
      }
    })
  }


}
