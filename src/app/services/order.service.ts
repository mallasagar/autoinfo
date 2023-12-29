import { Injectable } from '@angular/core';
import { API_BASE_URL, API_ENDPOINTS} from '../api.constant';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { catchError , throwError} from 'rxjs';

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
       
    getallorder(){
      const url=`${API_BASE_URL}${API_ENDPOINTS.ORDERS}`
      return  this.http.get(url)
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

    getorderbyid(id:number){
      const url = `${API_BASE_URL}${API_ENDPOINTS.ORDERS}/${id}`
      return this.http.get<any>(url);
     
    }
    updateorder(id: number, updatedData: any): Observable<any> {
      const url = `${API_BASE_URL}${API_ENDPOINTS.ORDERS}/${id}`;
      
      // Log the data being sent to the server
      console.log('Updating order with data:', updatedData);
    
      return this.http.put<any>(url, updatedData).pipe(
        catchError((error) => {
          // Handle the error (log, notify user, etc.)
          console.error('Error updating order:', error);
          // Propagate the error to the subscriber
          return throwError(error);
        })
      );
    }
    
}