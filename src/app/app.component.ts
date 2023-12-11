import { Component,HostListener  } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { UserroleService } from './services/userrole.service';
import { Observable } from 'rxjs';
import { Router, NavigationStart, NavigationEnd, NavigationCancel , NavigationError} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authservice: AuthenticationService, private router: Router, 
    private userroleservice: UserroleService, private toast: ToastrService){

  }

  showloader:boolean = false;
  title = 'Smart Resturant Service';
    ngOnInit() {
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.showloader=true;
          // Do something on navigation start
        }else if(event instanceof NavigationEnd|| event instanceof NavigationError||event instanceof NavigationCancel){
         this.showloader=false;
        }
      });

    }
}
