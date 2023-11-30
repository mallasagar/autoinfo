import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-userlayout',
  templateUrl: './userlayout.component.html',
  styleUrls: ['./userlayout.component.css']
})
export class UserlayoutComponent {


  constructor(private toastr:ToastrService, private authservice:AuthenticationService){}

  ngOninit(){
  
  }

  click(){
    // this.toastr.success("Hello Worlds!");
    // this.toastr.info("Hello Worlds!");
    // this.toastr.show("Hello Worlds!");
    // this.toastr.error("Hello Worlds!");
    // this.toastr.clear(20);
    this.toastr.warning("Hello Worlds!");
  }
  logout(){
    this.authservice.clearcredential()
  }
 
}
