import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { API_BASE_URL, API_ENDPOINTS} from '../api.constant';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerloggedin= new BehaviorSubject<boolean>(false)
  constructor(private http:HttpClient){
  }


  
  getcustomerbyid(id:number){
     const url = `${API_BASE_URL}${API_ENDPOINTS.CUSTOMERS}`;
     return this.http.get(`${url}/${id}`) 
    }
  checkcustomeremail(){
      const url = `${API_BASE_URL}${API_ENDPOINTS.CUSTOMERS}`;
      return this.http.get<any[]>(url).pipe(
        map((data) => {
          return data.map((item) => item.customeremail);
        }))
      }
  getallcustomers(){
    const url = `${API_BASE_URL}${API_ENDPOINTS.CUSTOMERS}`;
    return this.http.get(url)
  }
  checkemailforlogin(customeremail:any):any{
    const url=`${API_BASE_URL}${API_ENDPOINTS.CUSTOMERS}`
    return this.http.get<any[]>(url).pipe(
      map((data)=>{
        return data.find((item)=>item.customeremail===customeremail)
      })
    )
  }
  checkpasswordforlogin(customeremail:string,customerpassword:string){
    const url=`${API_BASE_URL}${API_ENDPOINTS.CUSTOMERS}`
    return this.http.get<any[]>(url).pipe(
      map((data)=>{
        return data.find((item)=>(item.customeremail===customeremail)&&(item.customerpassword===customerpassword))
      })
    )
  }
  deletecustomer(id:number){
    const url = `${API_BASE_URL}${API_ENDPOINTS.CUSTOMERS}`;
    return this.http.delete(`${url}/${id}`)
  }
  createcustomer(customerdata:any){
    const url = `${API_BASE_URL}${API_ENDPOINTS.CUSTOMERS}`;
    return this.http.post(url,customerdata)
  }
}