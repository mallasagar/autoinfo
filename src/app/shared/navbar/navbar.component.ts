import { Component, Output, EventEmitter, } from '@angular/core';
import { faBars,faXmark, faRightFromBracket, faCookieBite, faBowlFood, faWater, faWineBottle, faCaretDown, faHeart, faParachuteBox, faTruckFast, faBoxesPacking, faBoxOpen} from '@fortawesome/free-solid-svg-icons';
import { faUser,faCake } from '@fortawesome/free-solid-svg-icons';
// import { ProfileComponent } from 'src/app/pages/profile/profile.component';
// import { GetallUsersService } from 'src/app/services/getallusers.service';
// import { GetorderbyidService } from 'src/app/services/getorderbyid.service';
// import { ProductlistService } from 'src/app/services/productlist.service';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CustomerService } from 'src/app/services/customer.service';
import { CustomerprofileComponent } from 'src/app/components/customer/customerprofile/customerprofile.component';
import { ShareddataService } from 'src/app/services/shareddata.service';



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
  fasnack=faCookieBite;
  fafood=faBowlFood;
  fasweet=faCake;
  fadrink=faWineBottle;
  fadown=faCaretDown;
  fafavroute=faHeart;
  faorder=faBoxOpen
  faorderstatus=faTruckFast
  // aftertoggle:boolean=!this.toggle;
  isloggedin:Boolean=false;
  userid:number=0;
  admin: boolean = false;
  userinfo:any
  customerloggedin:boolean=false;
  customerinfo:any;
  
  toggle:boolean = false;
  menu:boolean = true;
  userdata:any;
  cartnumber:any;
  searchterm:string=''
  categorysearch:string=''

constructor( private matdialog: MatDialog,
            private customerservice: CustomerService, 
            private sharedservice:ShareddataService,
            private toast:ToastrService,
            private authservice:AuthenticationService
   ){}


  ngOnInit(): void {
     this.getcustomerinfo() 
    }
    
  @Output()searchtextchanged:EventEmitter<string>=new EventEmitter<string>();

    onSearchTextChanged(){
      this.searchtextchanged.emit(this.searchterm);
    }
    // send category from template to service
    selectedcategory(category:string){
      this.categorysearch=category;
      this.sharedservice.setcategory(this.categorysearch)
    }

  getcustomerinfo(){
    this.customerservice.customerloggedin.subscribe((value)=>{
      if(value===false){
        if((Boolean(localStorage.getItem("isloggedin"))===true)&&(localStorage.getItem("userrole")==='customer')){
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

  viewcustomerprofile(){
    const customerid=Number(localStorage.getItem('userid'));
    this.customerservice.getcustomerbyid(customerid)
    .subscribe((customer)=>{

      this.customerinfo=customer
      this.matdialog.open(CustomerprofileComponent,{
        data:{
          customerid:this.customerinfo.id,
          customername:this.customerinfo.customername,
          customeraddress:this.customerinfo.customeraddress,
          customeremail:this.customerinfo.customeremail,
          customergender:this.customerinfo.customergender,
          customercontact:this.customerinfo.customercontact,
          customerage:this.customerinfo.customerage
        }
      })
    })
  }
 

}



