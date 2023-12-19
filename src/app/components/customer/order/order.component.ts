import { Component } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  constructor(private orderservice: OrderService){
    
  }
  orderlist:any;

  ngOnInit(){
    this.getmyorder()
  }

  getmyorder(){
    const userid=Number(localStorage.getItem('userid'))
    this.orderservice.getorder(userid)
    .subscribe((data:any)=>{
     this.orderlist=data;
     console.log(this.orderlist)
    })
  }

}
