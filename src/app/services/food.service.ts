import { Injectable } from '@angular/core';
import { Observable,map } from 'rxjs';
import { API_BASE_URL, API_ENDPOINTS} from '../api.constant';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
    constructor(private http: HttpClient){}
    private foodcart=new BehaviorSubject<string>('');
    FoodCartChanged$ = this.foodcart.asObservable();
    foodid:any[]=[];
    foodarray:string[] = [];


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
 
markfood(data: any ){
    const url = `${API_BASE_URL}${API_ENDPOINTS.FAVS}`;
    return this.http.post(url,data);
}

checkfoodmark(favdata:any){
        const url = `${API_BASE_URL}${API_ENDPOINTS.FAVS}`;
        return this.http.get<any[]>(url).pipe(
            map((data)=>{return data.find((item)=>(favdata.userid===item.userid&&favdata.foodid===item.foodid)
                )})
          )
    }
getfavfood(id:number){
    const url = `${API_BASE_URL}${API_ENDPOINTS.FAVS}`;
    return this.http.get<any[]>(url).pipe(
        map((data)=>{return data.filter((item)=>item.userid===id
          )})
)
}

getallcart(){
    const url = `${API_BASE_URL}${API_ENDPOINTS.FAVS}`;
    return this.http.get<any[]>(url)
}
getcartbyid(id:number){
    const url = `${API_BASE_URL}${API_ENDPOINTS.FAVS}`;
    return this.http.get<any[]>(url).pipe(
        map((data)=>{return data.find((item)=>item.foodid===id
          )}))
}

getcartfood(id:any){
    const url = `${API_BASE_URL}${API_ENDPOINTS.FOODS}`;
    return this.http.get<any[]>(`${url}/${id}`)
}

deletefoodcart(id:number){
    const url = `${API_BASE_URL}${API_ENDPOINTS.FAVS}`;
    return this.http.delete(`${url}/${id}`)
}

}
   