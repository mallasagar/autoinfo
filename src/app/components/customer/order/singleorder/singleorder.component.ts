import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { OrderModel } from 'src/app/models/ordermodel';
import { CustomerService } from 'src/app/services/customer.service';
import { FoodService } from 'src/app/services/food.service';
import { OrderService } from 'src/app/services/order.service';
import { Orderdetails } from 'src/app/models/ordermodel';


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

  order: OrderModel= new OrderModel('','','','','','','','')
  orderdetail:Orderdetails= new Orderdetails('',1,'','','','')
  

  ngOnInit(){
    this.getfooddetail(this.data.foodid)
    this.getcustomerdetail() 
    
  }
  singleorder(){
    this.order.customername=this.customerdetail.customername
    this.order.customercontact=this.customerdetail.customercontact
    this.order.customeraddress=this.customerdetail.customeraddress
    this.order.customerid=this.customerdetail.id
    this.order.time=String(new Date())
    this.order.orderstatus='request'
    
    // this.order.order=[]

    const orderDetails = new Orderdetails(
      this.orderdetail.ordername=this.fooddetail.foodname,
      this.orderdetail.orderprice=this.fooddetail.foodprice,
      this.orderdetail.orderquantity,
      
      this.orderdetail.orderbrandname=this.fooddetail?.foodmakerbrand,
      this.orderdetail.orderbrandid=this.fooddetail.userid,
      this.orderdetail.ordertotalprice=String(Number(this.orderdetail.orderprice)*Number(this.orderdetail.orderquantity))
      );
      this.order.order.push(orderDetails)


    
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
