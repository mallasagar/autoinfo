import { Component, OnInit } from '@angular/core';
import { faBars,faXmark, faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
// import { ProfileComponent } from 'src/app/pages/profile/profile.component';
// import { GetallUsersService } from 'src/app/services/getallusers.service';
// import { GetorderbyidService } from 'src/app/services/getorderbyid.service';
// import { ProductlistService } from 'src/app/services/productlist.service';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CustomerService } from 'src/app/services/customer.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  famenu=faBars
  faclose=faXmark
  falogout=faRightFromBracket
  faprofile=faUser;
  // aftertoggle:boolean=!this.toggle;
  isloggedin:Boolean=false;
  userid:number=0;
  admin: boolean = false;
  userinfo:any
  customerloggedin:boolean=false;
  
  toggle:boolean = false;
  menu:boolean = true;
  userdata:any;
  cartnumber:any;

constructor( private matdialog: MatDialog,private customerservice: CustomerService, private toast:ToastrService,private authservice:AuthenticationService
   ){}

  ngOnInit(): void {
    this.getcustomerinfo()
   
}

  
  getcustomerinfo(){
    this.customerservice.customerloggedin.subscribe((value)=>{
      if(value===false){
        if(Boolean(localStorage.getItem("isloggedin"))===true){
            this.customerloggedin=true;
        }else if (Boolean(localStorage.getItem("isloggedin"))===false){
          this.customerloggedin=false;
        }else if (localStorage===null){
          this.customerloggedin=false;
        }
      }else {
        this.customerloggedin=value;
      }
    })
    }
  
  

  customerloggedout(){
    localStorage.clear();
    this.customerservice.customerloggedin.next(false)
    this.getcustomerinfo()
    this.toast.success("Logout Successfully.")
    // this.getcustomerinfo();
  }

  togglemenu(){
      this.toggle=!this.toggle;
      this.menu=!this.menu;
  }
  changetogglestate(){
    if(this.toggle==true){
      this.toggle=false;
      this.menu=!this.menu;
    }
    else{
      this.toggle=true;
    }
  }

 

}



