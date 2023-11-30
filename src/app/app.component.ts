import { Component,HostListener  } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { UrltrackerService } from './services/urltracker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authservice: AuthenticationService, private urltracker: UrltrackerService){}
  title = 'Smart Resturant Service';


  ngOnInit() {
    
}

  // @HostListener('window:beforeunload', ['$event'])
  // unloadNotification($event: any): void {
  //   // Perform actions before the page is reloaded
  //   // For example, save unsaved data or display a confirmation message
  //   // this.authservice.clearcredential()
  //   $event.returnValue = true;
  // }
}
