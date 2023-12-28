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
  total:number[]=[]

  ngOnInit(){
    this.getmyorder()
  }
  getmyorder(){
    const userid=Number(localStorage.getItem('userid'))
    this.orderservice.getorder(userid)
    .subscribe((data:any)=>{
     this.orderlist=data;

     for(let i=0;i<data.length;i++){
       let newprice=0;
      for(let j=0; j<data[i].order.length;j++){
        const price=Number(data[i].order[j].ordertotalprice);
        const total=price+newprice;
        newprice = total;
      }
      this.total.push(newprice);
     }
     console.log(this.total)
    })
  }

}
