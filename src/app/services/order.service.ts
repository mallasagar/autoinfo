import { Injectable } from '@angular/core';
import { API_BASE_URL, API_ENDPOINTS} from '../api.constant';
import { HttpClient } from '@angular/common/http';
import { map,filter } from 'rxjs';
import { OrderModel, Orderdetails } from '../models/ordermodel';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
    constructor(private http: HttpClient){}
    private ordervalue=new BehaviorSubject<string>('');
    order$ = this.ordervalue.asObservable();


    

    createorder(order:any){
            const url=`${API_BASE_URL}${API_ENDPOINTS.ORDERS}`
            return this.http.post(url, order)
          }
          
          
    getorder(id:number){
      const url=`${API_BASE_URL}${API_ENDPOINTS.ORDERS}`
      return this.http.get(url).pipe(
            map((data:any)=>{return data.filter((item:any)=>(item.customerid===id))})
      )
    }

    getuserorder(userid: number) {
      const url = `${API_BASE_URL}${API_ENDPOINTS.ORDERS}`;
  
      return this.http.get(url).pipe(
        map((data: any) => {
          return data.filter((order: any) => {
            for (let i = 0; i < order.order.length; i++){
              if(order.order[i].orderbrandid === userid){
                return order
              }
            }
          
          });
        })
      );
    } 

}