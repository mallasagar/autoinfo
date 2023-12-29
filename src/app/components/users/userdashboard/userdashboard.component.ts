import { Component } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent {

  constructor(private orderservice: OrderService, private foodservice: FoodService){
  }
ordernumber:Number=0;
foodnumber:number=0;

  ngOnInit(){
    this.getorderDetail()
    this.getfooddetail()
  }

  getorderDetail(){
    const userid= Number(localStorage.getItem('userid'));
    this.orderservice.getuserorder(userid)
      .subscribe((order)=>{
        if(order){
          this.ordernumber=order.length;
        }
      })
  }

  getfooddetail(){
    const userid= Number(localStorage.getItem('userid'));
    this.foodservice.getfoodlist(userid)
      .subscribe((food)=>{
        if(food){
          this.foodnumber=food.length;
        }
      })
  }

}
