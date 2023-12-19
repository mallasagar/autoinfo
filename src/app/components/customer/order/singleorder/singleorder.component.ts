import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { OrderModel } from 'src/app/models/ordermodel';
import { CustomerService } from 'src/app/services/customer.service';
import { FoodService } from 'src/app/services/food.service';
import { OrderService } from 'src/app/services/order.service';


@Component({
  selector: 'app-singleorder',
  templateUrl: './singleorder.component.html',
  styleUrls: ['./singleorder.component.css']
})
export class SingleorderComponent {
  constructor( @Inject(MAT_DIALOG_DATA) public data: any,
               private foodservice: FoodService, 
               private orderservice:OrderService,
               private toast:ToastrService, private customerservice: CustomerService){
  }
  fooddetail:any
  customerdetail:any;

  order: OrderModel= new OrderModel('','','','',1,'','','','','','','')
  

  ngOnInit(){
    this.getfooddetail(this.data.foodid)
    this.getcustomerdetail() 
  }
  singleorder(){
    this.order.customername=this.customerdetail.customername
    this.order.ordercontact=this.customerdetail.customercontact
    this.order.orderaddress=this.customerdetail.customeraddress
    this.order.customerid=this.customerdetail.id
    this.order.ordername=this.fooddetail.foodname
    this.order.orderbrand=this.fooddetail.foodmakerbrand
    this.order.orderprice=this.fooddetail.foodprice
    this.order.totalprice=String(Number(this.fooddetail.foodprice*this.order.orderquantity))
    this.order.orderstatus="requested"
    this.order.brandid=this.fooddetail.userid
    this.order.ordertime=String(new Date())
    this.orderservice.createorder(this.order)
    .subscribe((success)=>{
      if(success){
        this.toast.success("order placed successfully.")
      }else{
        this.toast.error("Error while placing an order.")
      }
    })
    
  }
  getfooddetail(data:number){
    this.foodservice.getfoodbyid(data)
    .subscribe((food) => {
      this.fooddetail = food
    });
  }
  getcustomerdetail(){
    const customerid= Number(localStorage.getItem("userid"));
    this.customerservice.getcustomerbyid(customerid)
      .subscribe((data)=>{
        this.customerdetail = data;
      })
  }

}
