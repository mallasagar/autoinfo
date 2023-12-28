import { Component } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { faBowlFood, faCheck, faClipboardCheck, faTruckFast, faXmark} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-orderstatus',
  templateUrl: './orderstatus.component.html',
  styleUrls: ['./orderstatus.component.css']
})
export class OrderstatusComponent {
  constructor(private orderservice: OrderService){

  }

orderlist:any[]=[]
farequest=faClipboardCheck
fapreparing=faBowlFood
fatruck=faTruckFast
facomplete= faCheck
fafail=faXmark

  ngOnInit(){
    this.getcustomerorder()

  }

  getcustomerorder(){
    const customerid=Number(localStorage.getItem('userid'))
    this.orderservice.getorder(customerid)
    .subscribe((orders:any)=>{
      this.orderlist=orders;
    })
  }


}
