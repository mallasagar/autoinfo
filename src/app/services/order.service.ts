import { Injectable } from '@angular/core';
import { API_BASE_URL, API_ENDPOINTS} from '../api.constant';
import { HttpClient } from '@angular/common/http';
import { map,filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
    constructor(private http: HttpClient){}

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
  

}