import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OrderModel, Orderdetails, SubOrderModel } from 'src/app/models/ordermodel';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-userorders',
  templateUrl: './userorders.component.html',
  styleUrls: ['./userorders.component.css']
})
export class UserordersComponent {


  constructor(private orderservice:OrderService,
          private toast:ToastrService){

  }
  userorderlist:any[]=[]
  customerid:any;
  copyoforder:any
// suborder: SubOrderModel= new SubOrderModel('')
order: OrderModel= new OrderModel('','','','','','','','')
orderdetail:Orderdetails= new Orderdetails('',1,'','','','','')
  
  ngOnInit(){
    this.getorderbyuserid()
    this.customerid=localStorage.getItem('userid')
  }
  getorderbyuserid(){
    const userid= Number(localStorage.getItem('userid'));
    //  get the order that matches the userid
    this.orderservice.getuserorder(userid)
    .subscribe((order:any)=>{
      this.userorderlist=order
    })
   
  }

  Setorderstatus(id: number, index: number) {
    this.orderservice.getorderbyid(id)
      .subscribe((data: any) => {
        if (data) {
          // Assuming this.orderdetail.suborderstatus is properly initialized
          const newSuborderStatus = this.orderdetail.suborderstatus;
  
          // Update the received data with the new suborder status
          data.order[index].suborderstatus = newSuborderStatus;
  
          // Create a deep copy of the data to avoid unintended side effects
          const fakeorder = JSON.parse(JSON.stringify(data));
  
          // Update the order on the server
          this.orderservice.updateorder(id, fakeorder)
            .subscribe((success) => {
              if (success) {
                this.toast.success('Successfully updated order');
                this.getorderbyuserid();
  
                // Move this line inside the success block
                this.orderdetail = new Orderdetails('', 1, '', '', '', '', '');
              }
            });
        }
      });
  }
  
}
