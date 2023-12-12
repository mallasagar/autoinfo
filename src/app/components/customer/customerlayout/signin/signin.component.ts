import { Component } from '@angular/core';
import { CustomerModel } from 'src/app/models/customermodel';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent  {
constructor(private route: Router, private customerservice: CustomerService, private toast: ToastrService){

}

  customer:CustomerModel= new CustomerModel('','','','','','','')




  ngOnInit(){
  }




 Logincustomer(){
    this.customerservice.checkemailforlogin(this.customer.customeremail)
    .subscribe((data:any)=>{
      if(!data){
        this.toast.error("Email is invalid!")
      }else{
        this.customerservice.checkpasswordforlogin(this.customer.customeremail,this.customer.customerpassword)
        .subscribe((success)=>{
        if(success){
          console.log(success)
           this.toast.success("welcome",success.customername)
          localStorage.setItem("isloggedin","true");
          localStorage.setItem("userid",success.id);
          localStorage.setItem("userrole","customer");
          this.customerservice.customerloggedin.next(true)
          this.route.navigate(['/home']);
        }else{
          this.toast.error("password didn't match")
        }
        })
      }
    })
  }
}
