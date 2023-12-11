import { Component } from '@angular/core';
import { CustomerModel } from 'src/app/models/customermodel';
import { CustomerService } from 'src/app/services/customer.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  customeremailexist:boolean=false;
  customeremail:any
   customer:CustomerModel=new CustomerModel('','','','','','','');
constructor(private customerservice:CustomerService, private toast:ToastrService, private route: Router) {

}


  ngOnInit(){

  }

  Registercustomer(){
    this.customerservice.checkcustomeremail()
    .subscribe((data)=>{
     const customerlength=data.length
     this.customeremail=data
     for(let i=0; i<customerlength;i++){
      if(this.customeremail[i]===this.customer.customeremail){
        this.customeremailexist=true;
        break;
      }else{
        this.customeremailexist=false;
      }
     }
        // check useremail exist already or not!
        if(this.customeremailexist===true){
          this.toast.error("email already exist")
        }
        else{
            this.createcustomer()
         

        }
    })
   
  }

  createcustomer(){
    this.customerservice.createcustomer(this.customer)
    .subscribe((success)=>{
      if(success) {
        this.route.navigate(['/signin'])
        this.toast.success("Customer created successfully")
        this.resetform()
      }else{
        this.toast.error("Error while creating customer")
      }
    })
  }


  resetform(){
    this.customer=new CustomerModel('','','','','','','');
  }

}
