import { Component } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { OrderService } from 'src/app/services/order.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor( private foodservice: FoodService,
              private customerservice: CustomerService,
              private authservice: AuthenticationService,
              private orderservice: OrderService){
  }
  usernumber:number=0;
  foodnumber:number=0;
  customernumber:number=0;
  ordernumber:number=0;

  ngOnInit(){
    this.getUserDetail()
    this.getallfood()
    this.getallcustomer()
    this.getallorder()
  }

  getUserDetail(){
    this.orderservice.getallorder()
      .subscribe((order:any)=>{
        if(order){
       this.usernumber=order.length;
        }
    })
  }
  getallfood(){
    this.foodservice.getallfoods()
      .subscribe((order:any)=>{
        if(order){
          this.foodnumber=order.length;
        }
    })
  }
  getallcustomer(){
    this.customerservice.getallcustomers()
    .subscribe((customer:any)=>{
      if(customer){
        this.customernumber=customer.length;
      }
    })
  }
  getallorder(){
    this.orderservice.getallorder()
    .subscribe((order:any)=>{
      if(order){
        this.ordernumber=order.length;
      }
    })
  }

}
