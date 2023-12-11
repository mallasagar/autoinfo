import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-admincustomer',
  templateUrl: './admincustomer.component.html',
  styleUrls: ['./admincustomer.component.css']
})
export class AdmincustomerComponent {

customerlist:any

constructor(private customerservice:CustomerService, private toast: ToastrService){

}

ngOnInit(){
  this.getallcustomer()


}

getallcustomer(){
  this.customerservice.getallcustomers()
  .subscribe((customer:any)=>{
    if(customer){
      this.customerlist=customer
    }
  })
}

  Deletecustomer(id:number){
    this.customerservice.deletecustomer(id)
    .subscribe((success)=>{
      if(success){
        this.toast.success("customer deleted successfully")
        this.getallcustomer()
      }else{
        this.toast.error("error deleting customer")
      }
    })
  }

}
