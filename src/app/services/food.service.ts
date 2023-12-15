import { Injectable } from '@angular/core';
import { Observable,map } from 'rxjs';
import { API_BASE_URL, API_ENDPOINTS} from '../api.constant';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
    constructor(private http: HttpClient){}

foodarray:string[]=[]

createfood(data: any): Observable<any>{
    const url = `${API_BASE_URL}${API_ENDPOINTS.FOODS}`;
    return this.http.post(url, data)
}
getfoodbyname(foodtext:string){
    const url = `${API_BASE_URL}${API_ENDPOINTS.FOODS}`;
    return this.http.get<any[]>(url).pipe(
        map((data)=>{return data.filter((item)=>(item.foodname===foodtext))})
    )
}
getallfoods(){
    const url = `${API_BASE_URL}${API_ENDPOINTS.FOODS}`;
        return this.http.get<any[]>(url)
}
getalldrinks(){
    const url = `${API_BASE_URL}${API_ENDPOINTS.FOODS}`;
        return this.http.get<any[]>(url).pipe(
            map((data)=>{return data.filter((item)=>(item.foodcategory==='drinks'))})
        )
}
getallsnacks(){
    const url = `${API_BASE_URL}${API_ENDPOINTS.FOODS}`;
    return this.http.get<any[]>(url).pipe(
        map((data)=>{return data.filter((item)=>(item.foodcategory==='snacks'))})
    )
}
getallsweets(){
    const url = `${API_BASE_URL}${API_ENDPOINTS.FOODS}`;
    return this.http.get<any[]>(url).pipe(
        map((data)=>{return data.filter((item)=>(item.foodcategory==='sweets'))})
    )
}

getfoodbyid(id:number){
    const url = `${API_BASE_URL}${API_ENDPOINTS.FOODS}`;
    return this.http.get<any[]>(`${url}/${id}`)
}

updatefoodbyid(id:number,data:any){
    const url = `${API_BASE_URL}${API_ENDPOINTS.FOODS}`;
    return this.http.put(`${url}/${id}`,data)


}

getfoodlist(id:number){
    const url = `${API_BASE_URL}${API_ENDPOINTS.FOODS}`;
    return this.http.get<any[]>(url).pipe(
        map((data)=>{return data.filter((item)=>(item.userid===id)
          )})
      )
}
deletefood(id:number){
    const url = `${API_BASE_URL}${API_ENDPOINTS.FOODS}`;
    return this.http.delete(`${url}/${id}`)
}
 
markfood(foodid:string,  ){
    
        





}
 
}
   