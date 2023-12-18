import { Component  } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel , NavigationError} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( private router: Router){}

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
