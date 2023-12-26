import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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
  
  ngOnInit(){
    this.getorderbyuserid()
    this.customerid=localStorage.getItem('userid')
  }
  getorderbyuserid(){
    const userid= Number(localStorage.getItem('userid'));
    this.orderservice.getuserorder(userid)
    .subscribe((order:any)=>{
      this.userorderlist=order
    })
   
  }
}
